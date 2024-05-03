import { Header, Footer, Sidebar } from "../../components";
import { ProfilePreviewRoute } from "./profile-preview-route";

export function ProfileRoute() {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header className="p-0 flex justify-between border-b-2 border-b-black">
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="flex m-10">
        <Sidebar className=" w-60" />
        <ProfilePreviewRoute />
      </div>
      <Footer />
    </div>
  );
}
