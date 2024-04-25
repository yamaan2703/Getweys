export default function AppBtn(props) {
    const { onClick, label, icon } = props;
  
    return (
      <button
        onClick={onClick}
        className="bg-[#28235c] text-white w-full font-bold rounded hover:bg-[#ec193f] focus:bg-[#ec193f] py-2 flex justify-center items-center"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </button>
    );
  }
  
  