import { whatsappLink } from "../data/site"
import { WhatsAppIcon } from "./icons"

export default function WhatsAppButton({
  children,
  message,
  className = "",
  variant = "primary",
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold transition-colors"
  const styles =
    variant === "ghost"
      ? "bg-white text-primary hover:bg-mint"
      : "bg-primary text-white hover:bg-primary-dark"

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {children}
    </a>
  )
}
