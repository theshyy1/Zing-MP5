const SideBarItem = ({ text, icon }) => {
  return (
    <li className="relative flex items-center text-[#b5b4b8] hover:text-white-color py-3 group">
      <span className="mr-3">
        <i className={icon + " text-xl"}></i>
      </span>
      <p className="hidden lg:block text-[14px] font-sm">{text}</p>
      <span className="block lg:hidden w-[80px] h-6 leading-6 text-white-color rounded absolute top-[25%] left-[200%] text-[12px] px-2 opacity-0 bg-[#302f31] group-hover:opacity-100 z-999">
        {text}
      </span>
    </li>
  );
};

export default SideBarItem;
