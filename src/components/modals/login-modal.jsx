import React, { useEffect } from "react";
import Modal from "./modal";
import Form from "../form/form";
import Button from "../button/button";
import { SignUpModal } from "./signup-modal";
import { useModals } from "../../hooks/use-modal";

export const LoginModal = ({ onClose }) => {
  const { registerModal, openModal } = useModals();

  useEffect(() => {
    registerModal("signup", <SignUpModal onClose={onClose} />);
  }, []);

  return (
    <Modal title={"Log In"}>
      <Form
        className={"flex flex-col items-center justify-center my-7"}
        // onSubmit={""}
      >
        <Form.TextInput labelText={"Email"} type={"email"} className="mb-5" />
        <Form.TextInput
          labelText={"Password"}
          type={"password"}
          className="mb-6"
        />
        <Form.Submit
          title={"Sign in"}
          className={"rounded-lg w-[350px] mb-4"}
        />
        <p className="font-minaRegular">
          Don't have an Account?{" "}
          <Button
            title={"Sign Up"}
            type="button"
            size="link"
            variant="link"
            onClick={() => {
              openModal("signup");
            }}
            className={
              "font-minaBold hover:text-slate-500 hover:border-slate-500"
            }
          />{" "}
        </p>
      </Form>
    </Modal>
  );
};
