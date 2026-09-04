# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective dental patients in João Pessoa - PB researching a dentist or clinic before
reaching out, arriving from search/social/referral. Two overlapping audiences, matched to
the two dentists who share the clinic:

- Patients seeking general/restorative dental care (clínica geral, periodontia, raspagem,
  restauração) — Dr. Thomás's practice.
- Patients seeking facial aesthetics (harmonização orofacial, botox, preenchimento) — Dr.
  Gabriel's practice, a more image-conscious, appearance-motivated audience.

Their job on this page: decide which of the two dentists fits their need and start a
conversation on WhatsApp.

## Product Purpose

A landing page whose subject is the two dentists themselves, Dr. Thomás Silva Vilas Boas and
Dr. Gabriel Medeiros, not the clinic they share. Each gets individual presentation (credentials,
specialties, services) sufficient for a visitor to identify with one and act. Success is a
visitor choosing a doctor and opening WhatsApp with that doctor's number.

## Positioning

Personal-dentist branding instead of institutional-clinic branding: two named specialists with
distinct, legible practices (general/restorative dentistry vs. facial aesthetics) under one
address, rather than one undifferentiated "clínica odontológica" brand. A generic dental-clinic
competitor could copy the clinic's services list; it could not copy these two doctors'
individual credentials and the trust that comes from choosing a named specialist directly.

## Operating Context

- Physical location: Metropolitan Shopping Empresarial, Av. Júlia Freire, 1200 -
  Expedicionários, João Pessoa - PB, 58041-000.
- Conversion path is WhatsApp only — each doctor has his own WhatsApp number
  (`wa.me/558399931455` for Dr. Thomás, `wa.me/5583993897637` for Dr. Gabriel). No phone line
  or booking system is part of the flow; do not design for one.
- The clinic (DENT STUDIO) itself gets a smaller, secondary section — it is context/venue for
  the two doctors, not the page's subject.

## Capabilities and Constraints

- Static marketing site: Vite + React + TypeScript, CSS puro (no Tailwind/Bootstrap/CSS
  framework) — styling via CSS Modules/plain `.css` files and `:root` custom properties.
- One component per folder under `src/components/<Name>/`, `.tsx` + `.css` co-located.
- Doctor data centralized in `src/data/doctors.ts` (id, name, role, credentials, services,
  whatsapp, profile photo), feeding a shared `DoctorProfile` component rather than duplicated
  JSX per doctor.
- Existing sections already scaffolded: Header, Hero, DoctorProfile, Services, ClinicSection,
  LocationSection, ContactSection, Footer.
- Currently mid-refactor: the first CSS pass shipped but was not visually approved: it is being
  fully rewritten (not incrementally patched) toward a dark, luxury visual direction. See
  `CLAUDE.md` at the repo root for the full design brief driving that rewrite.

## Brand Commitments

- Clinic name: DENT STUDIO. Tagline: "Seu sorriso no mais alto nível."
- Logo assets in `src/assets/clinic_logo/`: `blueWthite.png` (primary, note the real typo in
  the filename), plus `whiteBlue.png`, `grayWhite.png`, `offWhite.png` variants.
- Brand color `#233B56` confirmed via pixel-sampling `blueWthite.png` — an exact value, not an
  approximation.
- Doctor portrait cutouts in `src/assets/dr's/` and clinic-context photos referenced from
  `doctors.ts`.

## Evidence on Hand

- **Dr. Thomás Silva Vilas Boas** — Cirurgião-Dentista. Pós-graduação em Dentística,
  Periodontia e Estética Avançada; imersão em Gengivoplastia. Services: clínica geral,
  periodontia, raspagem, restauração. WhatsApp `wa.me/558399931455`.
- **Dr. Gabriel Medeiros** — Cirurgião-Dentista, CRO-PB 12353. Especializando em Harmonização
  Orofacial. Services: harmonização orofacial, botox, preenchimento. WhatsApp
  `wa.me/5583993897637`.
- No real clinic photo yet — `src/assets/hero.png` is a fictional placeholder until the client
  sends the real one.
- No testimonials, pricing, case studies, or press exist; do not fabricate any.

## Product Principles

1. The two dentists are the subject; the clinic is supporting context, never the lead.
2. Every path on the page ends at the correct doctor's WhatsApp — there is no other
   conversion mechanism to preserve or design around.
3. Don't invent facts (services, credentials, testimonials, pricing) beyond what's confirmed
   here and in `CLAUDE.md` — ask before assuming when something is missing.
4. The two doctors' practices are legibly distinct (general/restorative vs. facial aesthetics)
   so a visitor can self-select quickly.

## Accessibility & Inclusion

Undecided — no specific standard or assistive-tech requirement has been set for this first
version.
