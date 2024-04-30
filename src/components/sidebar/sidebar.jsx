import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ className, ...rest }) => {
  const [selected, setSelected] = useState(false);
  const links = [
    { name: "My Profile", path: "/profile", onClick: () => {} },
    { name: "My Notes", path: "/profile-notes", onClick: () => {} },
    { name: "My Letters", path: "/profile-letters", onClick: () => {} },
    { name: "Profile Settings", path: "/profile-settings", onClick: () => {} },
    { name: "Logout", onClick: () => {} },
  ];

  return (
    <div className={`flex flex-col mr-10 text-2xl font-minaBold ${className}`}>
      {links.map((link) => {
        return (
          <Link
            to={link.path}
            key={link.name}
            onClick={() => {}}
            className="mb-8"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
