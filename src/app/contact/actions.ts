"use server";

import { Resend } from "resend";
import { getSupabaseClient } from "@/lib/supabase";
import { interestOptions, leadSchema } from "@/lib/lead-schema";

export type SubmitLeadState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData,
): Promise<SubmitLeadState> {
  const parsed = leadSchema.safeParse({
    fullName: formData.get("fullName"),
    organization: formData.get("organization"),
    email: formData.get("email"),
    interest: formData.get("interest"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message:
        parsed.error.issues[0]?.message ??
        "Le formulaire contient une erreur, merci de vérifier vos informations.",
    };
  }

  // Honeypot rempli : on fait semblant que tout s'est bien passé, sans rien enregistrer.
  if (parsed.data.website) {
    return { status: "success" };
  }

  const { fullName, organization, email, interest, message } = parsed.data;

  const supabase = getSupabaseClient();
  const { error } = await supabase.from("leads").insert({
    full_name: fullName,
    organization: organization || null,
    email,
    interest,
    message,
    source: "contact",
  });

  if (error) {
    console.error("Erreur insertion lead Supabase:", error);
    return {
      status: "error",
      message:
        "Une erreur technique a empêché l'envoi. Vous pouvez réessayer ou m'écrire directement à contact@ialapoz.fr.",
    };
  }

  await sendNotification({ fullName, organization, email, interest, message });

  return { status: "success" };
}

async function sendNotification({
  fullName,
  organization,
  email,
  interest,
  message,
}: {
  fullName: string;
  organization?: string;
  email: string;
  interest: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    // Pas de clé Resend configurée : le lead reste enregistré dans Supabase,
    // mais aucune notification n'est envoyée tant que la clé n'est pas définie.
    return;
  }

  const interestLabel =
    interestOptions.find((o) => o.value === interest)?.label ?? interest;

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: "IALAPOZ <leads@ialapoz.fr>",
      to,
      replyTo: email,
      subject: `Nouvelle demande — ${fullName}${organization ? ` (${organization})` : ""}`,
      text: [
        `Nom : ${fullName}`,
        organization ? `Structure : ${organization}` : null,
        `Email : ${email}`,
        `Intérêt : ${interestLabel}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("Erreur envoi email de notification:", err);
  }
}
