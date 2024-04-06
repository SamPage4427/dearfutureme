export const TimelineCard = ({ title, content, type, onClick }) => {
  return (
    <div
      className="flex flex-col border border-black shadow-md rounded-lg p-6 h-[200px] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
      onClick={onClick}
    >
      {/* Will be set up to where each card will have a various icon such as a letter icon or a note icon to destinguish between the two */}
      {/* Icons will be determined by type */}
      <div>
        <h3 className="text-xl border-b border-b-zinc-700 font-minaBold text-zinc-800 mb-2.5">
          {title}
        </h3>
      </div>
      <div className="inline-block overflow-hidden text-ellipsis max-w-[500px]">
        <p className="text-lg font-minaRegular text-zinc-700 h-[120px] ">
          {content.length > 200 ? `${content.substring(0, 200)}...` : content}
        </p>
      </div>
    </div>
  );
};
