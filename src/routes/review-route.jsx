import React from "react";
import { Timeline, Header, Footer } from "../components";
import { dummyItems } from "../utils/constants";

export function ReviewRoute() {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header>
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      <div className="text-center mt-16">
        <h2 className="text-6xl font-wallpoet">Your Year in Review</h2>
      </div>
      <Timeline events={dummyItems} />
      <Footer className={""} />
    </div>
  );
}
