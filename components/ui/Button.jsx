export default function Button({ children, variant = "primary", ...props }) {
  const base = "rounded-button px-6 py-3 font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-primary-dark text-white hover:opacity-90",
    outline: "border border-outline text-title bg-white hover:bg-gray-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}