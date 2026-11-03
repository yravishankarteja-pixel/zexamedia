type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "soft-drop"
  | "soft-zoom";

export function Reveal({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}>) {
  return <div className={className}>{children}</div>;
}
