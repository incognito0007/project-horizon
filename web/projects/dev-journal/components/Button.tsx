interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  label,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = {
    primary: { background: "#1a1a1a", color: "#fff" },
    secondary: { background: "#f0f0f0", color: "#1a1a1a" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        padding: "10px 20px",
        fontSize: "14px",
        fontWeight: 500,
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "opacity 0.15s",
      }}
    >
      {label}
    </button>
  );
}
