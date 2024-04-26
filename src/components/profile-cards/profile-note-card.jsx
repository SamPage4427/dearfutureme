export const ProfileNoteCard = ({ title, content }) => {
  return (
    <div
      className="flex flex-col border border-black shadow-md rounded-lg p-6 h-[400px] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
      onClick={() => {
        // opens modal for note preview or notes page is show more card is clicked
      }}
    >
      <div>
        <h3 className="text-xl border-b border-b-zinc-700 font-minaBold text-zinc-800 mb-2.5">
          {title}
        </h3>
      </div>
      <div className="inline-block overflow-hidden text-ellipsis max-w-[200px]">
        <p className="text-lg font-minaRegular text-zinc-700">
          {content.length > 200 ? `${content.substring(0, 200)}...` : content}
        </p>
      </div>
    </div>
  );
};
