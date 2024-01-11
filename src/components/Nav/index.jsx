const Nav = ({ text, icon }) => {
  return (
    <li className="flex items-center text-white hover:bg-gray-color py-3 pl-8  border-[#9b4de0] ">
      <span className="mr-3">
        <i className={icon + " text-xl"}></i>
      </span>
      <p className="text-[14px] font-sm">{text}</p>
    </li>
  );
};

export default Nav;
