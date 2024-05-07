import {
  ProfileNotesCards,
  ProfileLettersCards,
} from "../../components/profile-cards";

export const ProfilePreviewRoute = () => {
  return (
    <div className={`flex flex-col ml-10 xl:ml-0 w-full`}>
      <div className="mb-10">
        <h2 className="font-minaBold text-4xl mb-7">Recent Notes</h2>
        {/* most recent 5 notes and then has another card with show more */}
        <ProfileNotesCards>
          <ProfileNotesCards.Preview />
        </ProfileNotesCards>
      </div>
      <div className="mb-10">
        <h2 className="font-minaBold text-4xl mb-7">Recent Letters</h2>
        {/* most recent letters: 3? should be longer than notes */}
        <ProfileLettersCards>
          <ProfileLettersCards.Preview />
        </ProfileLettersCards>
      </div>
      {/* mix of notes and letter snippets from the user. (most recent) */}
    </div>
  );
};
