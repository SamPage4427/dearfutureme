import { ProfileLetterCard } from "./profile-letter-card";
import { dummyItems } from "../../utils/constants";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const ProfileLettersCards = ({ children }) => {
  return <>{children}</>;
};

ProfileLettersCards.Preview = () => {
  const xlScreen = useMediaQuery({
    query: "(min-width: 1942px)",
  });

  const router = useNavigate();

  return (
    <div className={`grid gap-5 ${xlScreen ? "grid-cols-6" : "grid-cols-3"}`}>
      {/* Will need to sort by most recent date and go backward from that */}
      {dummyItems.length <= 3
        ? dummyItems.map((item) => (
            <ProfileLetterCard
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))
        : xlScreen
          ? dummyItems
              .slice(0, 5)
              .map((item) => (
                <ProfileLetterCard
                  key={item.title}
                  title={item.title}
                  content={item.content}
                />
              ))
          : dummyItems
              .slice(0, 2)
              .map((item) => (
                <ProfileLetterCard
                  key={item.title}
                  title={item.title}
                  content={item.content}
                />
              ))}
      {dummyItems.length > 3 && !xlScreen ? (
        <div
          className="flex flex-col justify-center border border-black shadow-md rounded-lg p-6 h-[400px] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl text-center"
          onClick={() => {
            // opens letters page
            router("/profile/letters");
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
            // opens letters page
            router("/profile/letters");
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

ProfileLettersCards.MyLetters = () => {
  const xlScreen = useMediaQuery({
    query: "(min-width: 1942px)",
  });
  return (
    <>
      {dummyItems.length > 0 ? (
        <div
          className={`grid gap-5 ${xlScreen ? "grid-cols-6" : "grid-cols-3"}`}
        >
          {dummyItems.map((item) => (
            <ProfileLetterCard
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      ) : (
        <h2 className="font-minaBold text-4xl mb-7">
          You have not written any letters
        </h2>
        // button that leads to create-letters page
      )}
    </>
  );
};
