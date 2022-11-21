const ButtonSecondary = ({ label }) => {
  return (
    <button className="text-slate-300 bg-[#000c24] rounded px-4 py-2 hover:text-white hover:bg-[#f44336] active:bg-[#af504acf]">
      {label}
    </button>
  );
};

export default ButtonSecondary;
