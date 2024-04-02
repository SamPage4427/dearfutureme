import React from "react";
import Header from "../components/header/header";
import Form from "../components/form/form";
import Footer from "../components/footer/footer";

function LetterRoute() {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-500 via-blue-300 to-white px-10 py-6">
      <Header className="p-0 flex justify-between border-b-2 border-b-black mb-10">
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="flex flex-col text-center items-center">
        <h2 className="p-2 text-6xl font-tourneyItalic text-transparent bg-clip-text bg-gradient-to-br from-black via-stone-700 to-black">
          Write your future!
        </h2>
        <p className="text-xl font-minaRegular w-[500px]">
          Send a message to your future self with goals, acheivements,
          accomplishments, etc that you want to happen before your future self
          receives the letter.
        </p>
      </div>
      <Form className="flex flex-col items-center my-14">
        <div className="flex flex-row justify-evenly w-[900px] mb-5">
          <Form.TextInput
            labelText={"Title"}
            placeholder={"Title"}
            id={"letterTitle"}
          />
          {/* date to receive the letter or date to check letter */}
          {/* Will be turned into a date component */}
          {/* 2 dates? 1 for current day and 1 for email date? */}
          <Form.TextInput labelText={"Date"} placeholder={"Date"} />
        </div>
        <Form.TextArea
          labelText={"Future Letter"}
          defaultValue={"Dear future me, "}
          className={""}
          id={"letterContent"}
        />
        <Form.Submit title={"Send it!"} className={""} />
      </Form>
      <Footer />
    </div>
  );
}

export default LetterRoute;
