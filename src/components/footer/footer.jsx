import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-lg font-minaRegular">
      <div className="">All rights reserved. &copy;Sam Page 2024</div>
      <Link
        to={""}
        className="hover:text-slate-500 hover:border-b hover:border-slate-500 "
      >
        Contact
      </Link>
      <Link
        to={""}
        className="hover:text-slate-500 hover:border-b hover:border-slate-500"
      >
        Terms & Conditions
      </Link>
      <Link
        to={""}
        className="hover:text-slate-500 hover:border-b hover:border-slate-500"
      >
        Cookies
      </Link>
    </footer>
  );
};

export default Footer;
