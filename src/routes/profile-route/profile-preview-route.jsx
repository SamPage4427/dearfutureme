import {
  ProfileNotesCards,
  ProfileLettersCards,
} from "../../components/profile-cards";

export const ProfilePreviewRoute = () => {
  return (
    <div className="flex flex-col ml-10">
      <div className="mb-10">
        <h2 className="font-minaBold text-3xl">Recent Notes</h2>
        {/* most recent 5 notes and then has another card with show more */}
        <ProfileNotesCards />
      </div>
      <div className="">
        <h2 className="font-minaBold text-3xl">Recent Letters</h2>
        {/* most recent letters: 3? should be longer than notes */}
        <ProfileLettersCards />
      </div>
      {/* mix of notes and letter snippets from the user. (most recent) */}
    </div>
  );
};
