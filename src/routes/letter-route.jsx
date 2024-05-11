import React from "react";
import { Header, Form, Footer, Button } from "../components";
import { useNavigate } from "react-router-dom";

export function LetterRoute() {
  const router = useNavigate();

  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header>
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="relative flex flex-col text-center items-center mt-16">
        <h2 className="p-2 text-6xl font-tourneyItalic text-transparent bg-clip-text bg-gradient-to-br from-black via-stone-700 to-black">
          Write your future!
        </h2>
        <p className="text-xl font-minaRegular w-[500px]">
          Send a message to your future self with goals, acheivements,
          accomplishments, etc that you want to happen before your future self
          receives the letter.
        </p>
        {/* Based on condition that user is logged in and that they have letters in the database */}
        {/* <Button
          title={"View all letters"}
          onClick={() => router("/profile/letters")}
          variant="link"
          className={"absolute right-3 top-2 text-2xl font-minaRegular"}
        /> */}
      </div>
      <Form className="flex flex-col items-center mt-6 mb-24">
        <div className="flex flex-row justify-between w-[900px] mb-5">
          <Form.TextInput
            labelText={"Title"}
            placeholder={"Title"}
            id={"letterTitle"}
            className={"w-[350px]"}
          />
          {/* date to receive the letter or date to check letter */}
          {/* Will be turned into a date component */}
          {/* 2 dates? 1 for current day and 1 for email date? */}
          <Form.TextInput
            labelText={"Date"}
            placeholder={"Date"}
            id={"letterDate"}
            className={"w-[350px]"}
          />
        </div>
        <Form.TextArea
          labelText={"Letter"}
          defaultValue={"Dear future me, \r\n"}
          className={"w-[900px] h-[500px]"}
          maxLength={5000}
          id={"letterContent"}
        />
        <Form.Submit
          title={"Send it!"}
          className={"mt-6 w-[500px] rounded-lg"}
        />
      </Form>
      <Footer />
    </div>
  );
}
