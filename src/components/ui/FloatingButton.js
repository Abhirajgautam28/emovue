const FloatingButton = ({ children, className, ...props }) => (
  <button
    className={`bg-purple-600/50 hover:bg-purple-600/80 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    {...props}>
    {children}
  </button>
);

export default FloatingButton;
