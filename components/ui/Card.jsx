export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface border border-primary rounded-card p-6 ${className}`}
    >
      {children}
    </div>
  );
}