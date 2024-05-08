import { Header, Footer, Sidebar } from "../../components";
import { ProfilePreviewRoute } from "./profile-preview-route";

export function ProfileRoute() {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header>
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="flex mt-20 mx-10 mb-10">
        <Sidebar className=" w-60" />
        <ProfilePreviewRoute />
      </div>
      <Footer className={"fixed bottom-0 right-1 left-1"} />
    </div>
  );
}
