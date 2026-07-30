import { z } from "zod";

export const interestOptions = [
  { value: "audit_ia", label: "Audit IA" },
  { value: "automatisation", label: "Automatisation" },
  { value: "developpement_digital", label: "Développement digital" },
  { value: "formation", label: "Formation" },
  { value: "suivi_a_la_carte", label: "Suivi à la carte" },
  { value: "je_ne_sais_pas_encore", label: "Je ne sais pas encore" },
] as const;

const interestValues = interestOptions.map((o) => o.value) as [
  string,
  ...string[],
];

export const leadSchema = z.object({
  fullName: z.string().trim().min(2, "Merci d'indiquer votre nom."),
  organization: z.string().trim().optional(),
  email: z.string().trim().email("Adresse email invalide."),
  interest: z.enum(interestValues, {
    message: "Merci de sélectionner ce qui vous intéresse.",
  }),
  message: z.string().trim().min(10, "Un message un peu plus détaillé nous aidera."),
  // Honeypot : doit rester vide, rempli uniquement par les bots.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
