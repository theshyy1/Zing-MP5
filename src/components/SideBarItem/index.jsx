const SideBarItem = ({ text, icon }) => {
  return (
    <li className="flex items-center text-[#b5b4b8] hover:text-white-color py-3 pl-8">
      <span className="mr-3">
        <i className={icon + " text-sm"}></i>
      </span>
      <p className="text-[14px] font-sm">{text}</p>
    </li>
  );
};

export default SideBarItem;
