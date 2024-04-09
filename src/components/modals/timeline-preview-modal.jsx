import Modal from "./modal";

export const TimelinePreviewModal = ({ date, heading, content }) => {
  return (
    <Modal title={date}>
      <h2 className="text-xl font-minaBold border-b border-b-black mb-2.5 text-center">
        {heading}
      </h2>
      <p className="font-minaRegular text-md">{content}</p>
    </Modal>
  );
};
