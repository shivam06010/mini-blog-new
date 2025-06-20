function FormButton({ children, onClick }) {
  return (
    <button
      className="text-white mt-4 cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-[#00459d] flex gap-3 items-center bg-[#245BD1] px-4 py-3 rounded-[6px]"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FormButton;
