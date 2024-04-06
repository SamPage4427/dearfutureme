import React from "react";
import { Timeline } from "../components/timeline";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { dummyItems } from "../utils/constants";

function ReviewRoute() {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header className={"p-0 flex justify-between border-b-2 border-b-black"}>
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="text-center mt-5">
        <h2 className="text-6xl font-wallpoet">Your Year in Review</h2>
      </div>
      <Timeline events={dummyItems} />
      <Footer />
    </div>
  );
}

export default ReviewRoute;
