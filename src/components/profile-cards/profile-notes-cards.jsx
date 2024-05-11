import { ProfileNoteCard } from "./profile-note-card";
import { dummyItems } from "../../utils/constants";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

export const ProfileNotesCards = ({ children }) => {
  // screen size dependent cards. Also should be centered on 4k screens
  return <>{children}</>;
};

ProfileNotesCards.Preview = () => {
  const xlScreen = useMediaQuery({
    query: "(min-width: 1942px)",
  });

  // const largerScreen = useMediaQuery({
  //   query: "(min-width: 1620px)",
  // });

  const router = useNavigate();

  return (
    <>
      {dummyItems.length > 0 ? (
        <div
          className={`grid gap-5 ${xlScreen ? "grid-cols-6" : "grid-cols-3"}`}
        >
          {/* Will need to sort by most recent date and go backward from that until limit of 3 or 5 depending on screensize reached */}
          {dummyItems.length <= 3
            ? dummyItems.map((item) => (
                <ProfileNoteCard
                  key={item.title}
                  title={item.title}
                  content={item.content}
                />
              ))
            : xlScreen
              ? dummyItems
                  .slice(0, 5)
                  .map((item) => (
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
          {dummyItems.length > 3 && !xlScreen ? (
            <div
              className="flex flex-col justify-center border border-black shadow-md rounded-lg p-6 max-h-[400px] max-w-[400px] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl text-center"
              onClick={() => {
                // opens notes page
                router("/profile/notes");
              }}
            >
              <h3 className="text-2xl font-minaBold text-zinc-800 mb-2.5">
                + {dummyItems.length - 2} More
              </h3>
            </div>
          ) : dummyItems.length > 5 && xlScreen ? (
            <div
              className="flex flex-col justify-center border border-black shadow-md rounded-lg p-6 h-[400px] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl text-center"
              onClick={() => {
                // opens notes page
                router("/profile/notes");
              }}
            >
              <h3 className="text-2xl font-minaBold text-zinc-800 mb-2.5">
                + {dummyItems.length - 5} More
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <h2 className="font-minaRegular text-4xl mb-7">
          You do not have any notes yet{" "}
          <SentimentVeryDissatisfied fontSize="large" />
        </h2>
      )}
    </>
  );
};

ProfileNotesCards.MyNotes = () => {
  const xlScreen = useMediaQuery({
    query: "(min-width: 1942px)",
  });
  return (
    <>
      {dummyItems.length > 0 ? (
        <div
          className={`grid gap-5 ${xlScreen ? "grid-cols-6" : "grid-cols-3"}`}
        >
          {/* Will need to sort by most recent date and go backward from that */}
          {/* Possible sort by filter? */}
          {dummyItems.map((item) => (
            <ProfileNoteCard
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      ) : (
        <h2 className="font-minaRegular text-4xl mb-7">
          You do not have any notes{" "}
          <SentimentVeryDissatisfied fontSize="large" />
        </h2>
        // button to open notes modal
      )}
    </>
  );
};
