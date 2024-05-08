import { useState } from "react";
import { Link } from "react-router-dom";
import { BellIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { Button } from "../button/button";
import { useModals } from "../../hooks/use-modal";
import { LoginModal, SignUpModal, NotesModal } from "../modals";

export const Header = ({ className, children, ...rest }) => {
  return (
    <header
      className={`fixed top-0 right-0 left-0 mx-auto px-10 py-6 bg-gradient-to-br from-blue-600 to-blue-300 bg-opacity-100 border-b-2 border-b-black ${className}`}
      {...rest}
    >
      <div className="p-0 flex justify-between">
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </div>
    </header>
  );
};

Header.Logo = () => {
  return (
    <div className="flex items-center text-center">
      <Link to="/" className="text-3xl font-tourneyReg hover:text-slate-500">
        Dear Future Me
      </Link>
    </div>
  );
};

Header.NavLinks = () => {
  const { openModal } = useModals();

  const navLinks = [
    { name: "Write Letter", link: "/letter" },
    {
      name: "Write Note",
      onClick: () => {
        openModal(<NotesModal />);
      },
    },
    { name: "Review", link: "/year-review" },
  ];

  const buttons = [
    {
      title: "Log In",
      onClick: () => {
        openModal(<LoginModal />);
      },
    },
    {
      title: "Sign Up",
      onClick: () => {
        openModal(<SignUpModal />);
      },
    },
  ];

  return (
    <nav className="flex justify-evenly w-[650px] font-minaBold text-3xl items-center text-center">
      {navLinks.map((link) => {
        return (
          <Link
            to={link.link}
            key={link.name}
            onClick={link.onClick}
            className="hover:text-slate-500"
          >
            {link.name}
          </Link>
        );
      })}
      <BellIcon className="w-8 h-8 hover:text-slate-500" />
      {/* <BellAlertIcon className="w-8 h-8 hover:text-slate-500" /> */}
    </nav>
  );
};

Header.Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { openModal } = useModals();

  const buttons = [
    {
      title: "Log In",
      onClick: () => {
        openModal(<LoginModal />);
      },
    },
    {
      title: "Sign Up",
      src: "",
      onClick: () => {
        openModal(<SignUpModal />);
      },
    },
  ];

  return (
    <>
      {isLoggedIn === false ? (
        <div className="flex">
          {buttons.map((button) => (
            <div key={button.title} className="">
              <Button
                title={button.title}
                variant="linkHeader"
                size="link"
                className={"font-minaBold text-2xl hover:text-slate-500 p-2.5"}
                onClick={button.onClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex">
          <Link
            to="/profile"
            className="hover:text-slate-500 text-3xl font-minaBold mr-5"
          >
            Profile
          </Link>
          <Button
            title={"Logout"}
            size="link"
            variant="link"
            className={
              "hover:text-slate-500 text-3xl font-minaBold border-none"
            }
          />
        </div>
      )}
    </>
  );
};
