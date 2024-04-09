import cx from "classnames";

export const Button = ({
  className,
  title,
  type = "button",
  variant = "submit",
  onClick,
  size = "md",
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cx(
        "",
        !disabled &&
          variant === "submit" &&
          "bg-blue-600 text-white font-minaBold text-xl",
        !disabled && variant === "link" && "border-b-2 border-black text-black",
        !disabled && variant === "linkHeader" && "text-black",
        disabled && variant === "disabled" && "bg-slate-200 text-black",
        size === "md" && "p-4",
        size === "sm" && "p-2.5",
        size === "lg" && "py-4 w-full",
        size === "link" && "p-0",
        className,
      )}
    >
      {title}
    </button>
  );
};
