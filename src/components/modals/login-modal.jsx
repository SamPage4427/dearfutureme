import Modal from "./modal";
import { Form } from "../form/form";
import { Button } from "../button/button";
import { SignUpModal } from "./signup-modal";
import { useModals } from "../../hooks/use-modal";

export const LoginModal = () => {
  const { openModal } = useModals();

  return (
    <Modal title={"Log In"}>
      <Form
        className={"flex flex-col items-center justify-center my-7"}
        onSubmit={() => {}}
      >
        <Form.TextInput
          labelText={"Email"}
          type={"email"}
          className="mb-5 w-[350px]"
        />
        <Form.TextInput
          labelText={"Password"}
          type={"password"}
          className="mb-6 w-[350px]"
        />
        {/* Add remember me and forgot password logic */}
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
              openModal(<SignUpModal />);
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
