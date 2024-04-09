import React from "react";
import { Button } from "../button/button";

export const Form = ({ className, onSubmit, children, ...rest }) => {
  return (
    <form className={className} onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
};

Form.TextInput = ({
  labelText,
  className,
  id,
  placeholder,
  type = "text",
  register,
  ...rest
}) => {
  return (
    <div className="font-minaRegular flex flex-col w-[350px]">
      <label htmlFor={id} className="text-2xl">
        {labelText}
      </label>
      <input
        register={register}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`border border-black text-black rounded-md h-14 p-2.5 text-xl ${className}`}
        {...rest}
      />
    </div>
  );
};

Form.TextArea = ({
  labelText,
  className,
  id,
  placeholder,
  defaultValue,
  register,
  maxLength,
  ...rest
}) => {
  return (
    <div className="text-2xl font-minaRegular flex flex-col">
      <label htmlFor={id}>{labelText}</label>
      <textarea
        register={register}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type="text"
        minLength={2}
        maxLength={maxLength}
        className={`border border-black p-2.5 rounded-lg ${className}`}
        {...rest}
      />
    </div>
  );
};

Form.Submit = ({ disabled, className, title, onClick }) => {
  return (
    <div>
      <Button
        variant="submit"
        size="md"
        type="submit"
        onClick={onClick}
        title={title}
        disabled={disabled}
        className={`${className}`}
      />
    </div>
  );
};
