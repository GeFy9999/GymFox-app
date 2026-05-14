type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const styles = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`font-medium px-6 py-3 rounded-md transition-colors ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
