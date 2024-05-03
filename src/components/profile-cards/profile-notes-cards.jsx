import { ProfileNoteCard } from "./profile-note-card";
import { dummyItems } from "../../utils/constants";
import { useMediaQuery } from "usehooks-ts";

export const ProfileNotesCards = () => {
  // screen size dependent cards. Also should be centered on 4k screens
  const xlScreen = useMediaQuery({
    query: "(min-width: 1441px)",
  });

  return (
    <div className="grid grid-cols-3 gap-5">
      {/* Will need to sort by most recent date and go backward from that */}
      {dummyItems.length <= 3
        ? dummyItems.map((item) => (
            <ProfileNoteCard
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))
        : xlScreen
        ? dummyItems.map((item) => (
            <ProfileNoteCard
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))
        : dummyItems
            .slice(0, 2)
            .map((item) => (
              <ProfileNoteCard
                key={item.title}
                title={item.title}
                content={item.content}
              />
            ))}
      {dummyItems.length > 3 ? (
        <div
          className="flex flex-col justify-center border border-black shadow-md rounded-lg p-6 h-[400px] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl text-center"
          onClick={() => {
            // opens notes page
          }}
        >
          <h3 className="text-2xl font-minaBold text-zinc-800 mb-2.5">
            + {dummyItems.length - 2} More
          </h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
