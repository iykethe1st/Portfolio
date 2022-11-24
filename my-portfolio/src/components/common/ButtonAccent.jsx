const ButtonAccent = ({ label }) => {
  return (
    <button className="bg-[#f44336] rounded px-4 py-2 text-white hover:bg-[#a3352e] active:bg-[#af504acf]">
      {label}
    </button>
  );
};

export default ButtonAccent;
