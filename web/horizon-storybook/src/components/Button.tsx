type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "padding: 6px 12px; font-size: 12px;",
  md: "padding: 10px 20px; font-size: 14px;",
  lg: "padding: 14px 28px; font-size: 16px;",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "background: #1d4ed8; color: #fff;",
  secondary: "background: #64748b; color: #fff;",
  danger: "background: #dc2626; color: #fff;",
};

export function Button({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...Object.fromEntries(
          variantStyles[variant]
            .split(";")
            .filter(Boolean)
            .map((s) => s.split(":").map((x) => x.trim())),
        ),
        ...Object.fromEntries(
          sizeStyles[size]
            .split(";")
            .filter(Boolean)
            .map((s) => s.split(":").map((x) => x.trim())),
        ),
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontWeight: 500,
      }}
    >
      {label}
    </button>
  );
}
