import { Link } from "react-router-dom";

export const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="p-10 flex justify-between items-center text-lg font-minaRegular">
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
      </div>
    </footer>
  );
};
