import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const CustomNavLink = ({ to, children, onClose, ...props }) => {
  return (
    <li
      className="h-[18px] font-[500] text-[14px] text-nowrap leading-[18px] font-['IBM Plex Sans'] text-[#48505B] hover:border-b-2 border-b-[#48505B]"
      style={{ ...props, listStyle: "none" }}
      onClick={onClose}
    >
      {to.startsWith("#") ? (
        <HashLink smooth to={to}>
          {children}
        </HashLink>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </li>
  );
};

export default CustomNavLink;
