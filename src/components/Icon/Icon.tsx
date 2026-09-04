/** Ícones de linha fina, desenhados no mesmo peso do letreiro da marca.
 *  Nunca emoji, nunca ícone preenchido. */

interface IconProps {
  className?: string
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="10"
      viewBox="0 0 18 10"
      aria-hidden="true"
      {...base}
    >
      <path d="M0 5h16.4M12.6 1 16.8 5l-4.2 4" />
    </svg>
  )
}

export function WhatsAppMark({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 20 20"
      aria-hidden="true"
      {...base}
    >
      <path d="M2.6 17.4 3.9 13.6A7.7 7.7 0 1 1 6.9 16.4l-4.3 1Z" />
      <path d="M7.4 7.1c.15-.35.31-.36.5-.36h.42c.14 0 .33.02.5.4l.6 1.4c.06.16.02.34-.08.47l-.32.4c-.1.13-.2.27-.05.5a5.6 5.6 0 0 0 2.44 2.14c.24.11.38.09.52-.06l.44-.5c.13-.15.27-.15.44-.09l1.36.66c.2.1.33.2.33.36 0 .5-.28 1-.72 1.26-.44.26-1.06.32-1.72.15a8.9 8.9 0 0 1-5.03-4.75c-.24-.75-.2-1.5.07-1.98Z" />
    </svg>
  )
}

export function PinMark({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="14"
      height="18"
      viewBox="0 0 14 18"
      aria-hidden="true"
      {...base}
    >
      <path d="M7 17c3.7-4.4 5.6-7.6 5.6-9.8A5.6 5.6 0 0 0 1.4 7.2C1.4 9.4 3.3 12.6 7 17Z" />
      <circle cx="7" cy="7.1" r="2.1" />
    </svg>
  )
}

export function MenuMark({ open }: { open: boolean }) {
  return (
    <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true" {...base}>
      {open ? (
        <path d="M3 1.5 19 12.5M19 1.5 3 12.5" />
      ) : (
        <path d="M0 2h22M0 12h22" />
      )}
    </svg>
  )
}
