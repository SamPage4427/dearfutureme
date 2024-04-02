import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BellIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import Button from "../button/button";
import { useModals } from "../../hooks/use-modal";
import Modal from "../modals/modal";
import { LoginModal } from "../modals/login-modal";
import { SignUpModal } from "../modals/signup-modal";

const Header = ({ className, children, ...rest }) => {
  return (
    <header className={className} {...rest}>
      <Header.Logo />
      <Header.NavLinks />
      <Header.Profile />
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
  const navLinks = [
    { name: "Write Letter", link: "/letter" },
    { name: "Notes", onClick: () => {} },
    { name: "Review", link: "/year-review" },
  ];

  const buttons = [
    {
      title: "Log In",
      src: "",
      onClick: () => {
        openModal("modal");
      },
    },
    {
      title: "Sign Up",
      src: "",
      onClick: () => {},
    },
  ];

  return (
    <nav className="flex justify-between w-[650px] font-minaBold text-3xl items-center text-center">
      {navLinks.map((link) => {
        return (
          <Link to={link.link} key={link.name} className="hover:text-slate-500">
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { registerModal, openModal, closeModal } = useModals();

  useEffect(() => {
    registerModal("login", <LoginModal onClose={closeModal} />);
    registerModal("signup", <SignUpModal onClose={closeModal} />);
  }, []);

  const buttons = [
    {
      title: "Log In",
      onClick: () => {
        openModal("login");
      },
    },
    {
      title: "Sign Up",
      src: "",
      onClick: () => {
        openModal("signup");
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
        <Link
          to="/profile"
          className="hover:text-slate-500 text-3xl font-minaBold"
        >
          Profile
        </Link>
      )}
    </>
  );
};

export default Header;
