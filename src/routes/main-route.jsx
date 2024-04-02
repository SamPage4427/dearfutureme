import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import dearFuture from "../images/DearFutureMeImage.png";
import Button from "../components/button/button";

import { TypeAnimation } from "react-type-animation";

function MainRoute() {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white px-10 py-6">
      <Header className="p-0 flex justify-between border-b-2 border-b-black">
        <Header.Logo />
        <Header.NavLinks />
        <Header.Profile />
      </Header>
      {/* body of the main page description/test of the website */}
      <div className="text-center text-black my-10">
        <h1 className="text-8xl font-wallpoet">
          <TypeAnimation
            sequence={["Dear Future Me", 3000]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-4xl font-tourneyItalic">
          A place for future{" "}
          <TypeAnimation
            sequence={[
              "reference.",
              3000,
              "acheivements.",
              3000,
              "goals.",
              3000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-12 m-16">
          <div className="lg:m-16 col-span-7 xl:col-span-8">
            <p className="font-minaBold text-2xl text-start">
              Take a look into the past by writing yourself a letter for the
              future. Take notes of all the memorable events in your life, maybe
              even the little things. <br />
              Track your yearly progress, chase your goals, relive your
              achievements. <br />
              This is your chance to reflect and admire.
            </p>
          </div>
          <div className="lg:w-96 lg:h-96">
            <img src={dearFuture} className=""></img>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-tourneyReg mb-5">
            Start writing to your future self today!
          </h2>
          {/* button for signup if not logged in ? button to write letter which is link to letter page */}
          <Button
            variant={"link"}
            className={"font-minaRegular text-2xl"}
            title="Sign up"
            size="link"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainRoute;
