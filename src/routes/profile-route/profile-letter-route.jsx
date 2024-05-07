import { Header, Footer, Sidebar, ProfileLettersCards } from "../../components";
export const ProfileLetterRoute = () => {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header className="p-0 flex justify-between border-b-2 border-b-black">
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="flex m-10">
        <Sidebar className="w-60" />
        <div className="flex flex-col ml-10 w-full">
          <h2 className="font-minaBold text-4xl mb-7">My Letters:</h2>
          <ProfileLettersCards>
            <ProfileLettersCards.MyLetters />
          </ProfileLettersCards>
        </div>
      </div>
      <Footer />
    </div>
  );
};
