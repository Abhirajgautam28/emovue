const GlassCard = ({ children, className }) => (
  <div
    className={`bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 ${className}`}>
    {children}
  </div>
);

export default GlassCard;
