const ButtonPrimary = ({ label }) => {
  return (
    <button className="bg-[#928a97] text-[#000c24] rounded px-4 py-2 hover:text-white hover:bg-[#f44336] active:bg-[#af504acf]">
      {label}
    </button>
  );
};

export default ButtonPrimary;
