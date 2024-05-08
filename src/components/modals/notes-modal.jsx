import { Form } from "../form/form";
import Modal from "./modal";

export const NotesModal = () => {
  return (
    <div>
      <Modal title="Write Note">
        <Form className={"flex flex-col items-center m-6"} onSubmit={() => {}}>
          <Form.TextInput
            labelText={"Note Title"}
            className={"mb-5 w-[350px]"}
            placeholder={"Title"}
          />
          <Form.TextArea
            labelText={"Content"}
            className={"w-[350px] min-h-[140px] h-[140px] max-h-[400px] mb-5"}
            placeholder={"I achieved/accomplished..."}
            maxLength={500}
          />
          <Form.Submit title={"Create"} className={"w-[350px] rounded-lg"} />
        </Form>
      </Modal>
    </div>
  );
};
