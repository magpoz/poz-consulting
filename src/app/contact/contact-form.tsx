"use client";

import { useActionState } from "react";
import { submitLead, type SubmitLeadState } from "./actions";
import { interestOptions } from "@/lib/lead-schema";

const initialState: SubmitLeadState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitLead,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-[24px] border border-sage bg-cream px-7 py-8">
        <h3 className="font-serif text-2xl">Message bien reçu.</h3>
        <p className="mt-2 text-base leading-[1.7] text-body">
          Je réponds sous 48 h, personnellement.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction}>
      <h2 className="mb-7 font-serif text-3xl">M&apos;écrire</h2>

      {/* Honeypot anti-spam : invisible pour un humain, laissé vide */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
          Prénom et nom
          <input
            type="text"
            name="fullName"
            required
            placeholder="Camille Durand"
            className="border-b border-sand-border bg-transparent py-2.5 font-sans text-[17px] font-normal tracking-normal text-charcoal normal-case placeholder:text-[#8C948F] focus:border-sage focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
          Structure
          <input
            type="text"
            name="organization"
            placeholder="Cabinet, association, TPE…"
            className="border-b border-sand-border bg-transparent py-2.5 font-sans text-[17px] font-normal tracking-normal text-charcoal normal-case placeholder:text-[#8C948F] focus:border-sage focus:outline-none"
          />
        </label>
      </div>

      <label className="mt-6 flex flex-col gap-2 text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="camille@exemple.fr"
          className="border-b border-sand-border bg-transparent py-2.5 font-sans text-[17px] font-normal tracking-normal text-charcoal normal-case placeholder:text-[#8C948F] focus:border-sage focus:outline-none"
        />
      </label>

      <fieldset className="mt-7">
        <legend className="mb-3 text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
          Ce qui vous intéresse
        </legend>
        <div className="flex flex-wrap gap-2.5 text-sm font-medium">
          {interestOptions.map((option, i) => (
            <label
              key={option.value}
              className="cursor-pointer rounded-full border border-sand-border px-4.5 py-2.5 text-charcoal has-[:checked]:border-sage has-[:checked]:bg-sage has-[:checked]:text-forest"
            >
              <input
                type="radio"
                name="interest"
                value={option.value}
                required
                defaultChecked={i === 0}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-7 flex flex-col gap-2 text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
        Votre message
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Ce qui vous prend du temps aujourd'hui, en quelques lignes."
          className="resize-y border-b border-sand-border bg-transparent py-2.5 font-sans text-[17px] leading-[1.7] font-normal tracking-normal text-charcoal normal-case placeholder:text-[#8C948F] focus:border-sage focus:outline-none"
        />
      </label>

      {state.status === "error" && (
        <p className="mt-4 text-sm text-[#8F4A22]" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 rounded-full bg-charcoal px-7 py-4 font-semibold text-cream hover:bg-charcoal-hover disabled:opacity-60"
      >
        {pending ? "Envoi…" : "Envoyer mon message"}
      </button>
      <p className="mt-4 text-sm text-muted">
        Je réponds sous 48 h, personnellement.
      </p>
    </form>
  );
}
