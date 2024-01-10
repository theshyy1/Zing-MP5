const Nav = ({ text, icon }) => {
  return (
    <li className="flex gap-5 items-center text-white hover:bg-gray-color py-5 pl-8 transition-all hover:border-l-4 border-[#9b4de0] ">
      <div>
        <i className={icon + " text-xl"}></i>
        {""}
      </div>
      <p className="text-[14px] font-medium">{text}</p>
    </li>
  );
};

export default Nav;
