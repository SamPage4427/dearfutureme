import Modal from "./modal";

export const PreviewModal = ({ title, content }) => {
  return (
    <Modal title={title}>
      <p className="font-minaRegular text-md mb-5">{content}</p>
    </Modal>
  );
};
