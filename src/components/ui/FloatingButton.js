export default function FloatingButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
