export default function AppBtn(props) {
    const { onClick, label, icon } = props;
  
    return (
      <button
        onClick={onClick}
        className="text-white bg-[#7A52F4] font-semibold py-2 px-6 rounded-full"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </button>
    );
  }
  
  