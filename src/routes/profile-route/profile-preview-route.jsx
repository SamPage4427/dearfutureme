import {
  ProfileNotesCards,
  ProfileLettersCards,
} from "../../components/profile-cards";

export const ProfilePreviewRoute = () => {
  return (
    <div className={`flex flex-col ml-10 w-full`}>
      <div className="mb-10 xl:w-[1000px]">
        <h2 className="font-minaBold text-4xl mb-7">Recent Notes</h2>
        {/* most recent 5 notes and then has another card with show more */}
        <ProfileNotesCards />
      </div>
      <div className="xl:w-[1000px]">
        <h2 className="font-minaBold text-4xl mb-7">Recent Letters</h2>
        {/* most recent letters: 3? should be longer than notes */}
        <ProfileLettersCards />
      </div>
      {/* mix of notes and letter snippets from the user. (most recent) */}
    </div>
  );
};
