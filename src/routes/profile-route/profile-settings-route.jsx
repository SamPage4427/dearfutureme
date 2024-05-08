import { Header, Footer, Form, Sidebar, Button } from "../../components";

export const ProfileSettingsRoute = () => {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header>
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="flex mt-20 mx-10 mb-10">
        <Sidebar className="w-60" />
        <div className="flex flex-col ml-10 w-full">
          <h2 className="font-minaBold text-4xl mb-7">Settings</h2>
          <div className="grid grid-cols-2">
            <Form className={"mb-5"}>
              <Form.TextInput
                labelText={"Username:"}
                className={"mb-4 w-full"}
                placeholder={"Type Username"}
              />
              <Form.TextInput
                labelText={"Email:"}
                className={"mb-4 w-full"}
                placeholder={"Type Email"}
              />
              <Form.TextInput
                labelText={"Current Password:"}
                className={"mb-4 w-full"}
                placeholder={"Type Current Password"}
              />
              <Form.TextInput
                labelText={"New Password:"}
                className={"mb-4 w-full"}
                placeholder={"Type New Password"}
              />
            </Form>
            {/* Need to link button to form */}
            <Button
              className={"h-14 place-self-center"}
              variant="delete"
              size="lg"
              title={"Delete Profile"}
            />
          </div>
        </div>
      </div>
      <Footer className={"fixed bottom-0 right-1 left-1"} />
    </div>
  );
};
