import Modal from "./modal";
import Form from "../form/form";
import Button from "../button/button";
import { useEffect } from "react";
import { useModals } from "../../hooks/use-modal";
import { LoginModal } from "./login-modal";

export const SignUpModal = ({ onClose }) => {
  const { registerModal, openModal } = useModals();

  useEffect(() => {
    registerModal("login", <LoginModal onClose={onClose} />);
  }, []);

  return (
    <Modal title={"Sign Up"}>
      <Form
        className={"flex flex-col items-center justify-center my-7"}
        onSubmit={() => {}}
      >
        <Form.TextInput labelText={"Email:"} type={"email"} className="mb-5" />
        <Form.TextInput
          labelText={"Password:"}
          type={"password"}
          className="mb-5"
        />
        <Form.TextInput
          labelText={"Confirm Password:"}
          type={"password"}
          className={"mb-6"}
        />

        <Form.Submit
          title={"Create Account"}
          className={"rounded-lg w-[350px] mb-4"}
        />
        <p className="font-minaRegular">
          Already have an Account?{" "}
          <Button
            title="Sign in"
            variant="link"
            size="link"
            type="button"
            onClick={() => {
              openModal("login");
            }}
            className={
              "font-minaBold hover:text-slate-500 hover:border-slate-500"
            }
          />
        </p>
      </Form>
    </Modal>
  );
};
