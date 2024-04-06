import { Fragment } from "react";
import { TimelineCard } from "./timeline-card";

export const Timeline = ({ events }) => {
  const dummyItems = [
    // Will have to sort by date created (backend)
    // Direction will have to be determined upon creation?
    {
      title: "Apple",
      content:
        "Apple designs, manufactures, and markets a broad range of consumer technology products, including smartphones, personal computers, tablets, wearable devices, home entertainment devices, and more. Some of its most popular products include its iPhone smartphones and Mac computers. Apple also has dramatically expanded its sales from services. It operates digital content stores and recently launched several streaming services, including Apple+, a platform for on-demand entertainment content.",
      dateCreated: "11/11/2023",
      src: "",
      type: "letter",
      direction: "left",
    },
    {
      title: "Microsoft",
      content:
        "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. In 2016, it was the world's largest software maker by revenue (currently Alphabet/Google has more revenue).",
      dateCreated: "12/24/2023",
      src: "",
      type: "note",
      direction: "right",
    },
    {
      title: "Amazon Web Services",
      content:
        "Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. In aggregate, these cloud computing web services provide a set of primitive abstract technical infrastructure and distributed computing building blocks and tools. One of these services is Amazon Elastic Compute Cloud (EC2), which allows users to have at their disposal a virtual cluster of computers, available all the time, through the Internet.",
      dateCreated: "01/15/2024",
      src: "",
      type: "note",
      direction: "left",
    },
    {
      title: "Google",
      content:
        "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies alongside Amazon, Apple, and Microsoft.",
      dateCreated: "02/24/2024",
      src: "",
      type: "note",
      direction: "right",
    },
  ];
  return (
    <>
      {/* Will have to do something with the date where the user can search using a specific timeframe and it only shows past year or so of data */}
      {dummyItems.length > 0 ? (
        <div className="m-4 flex flex-col gap-y-3 mb-12">
          {/* Timeline card will be mapped with notes and letters */}
          <Timeline.Circle />
          {dummyItems.map((event, key) => {
            return (
              <Fragment key={key}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                  {event.direction === "left" ? (
                    <TimelineCard
                      title={event.title}
                      content={event.content}
                      onClick={() => {}}
                    />
                  ) : (
                    <div className="text-xl font-wallpoet text-end">
                      {event.dateCreated}
                    </div>
                  )}
                  <Timeline.Pillar />
                  {event.direction === "right" ? (
                    <TimelineCard title={event.title} content={event.content} />
                  ) : (
                    <div className="text-xl font-wallpoet">
                      {event.dateCreated}
                    </div>
                  )}
                </div>
                {key < dummyItems.length - 1 && <Timeline.Circle />}
              </Fragment>
            );
          })}
          <Timeline.Circle />
        </div>
      ) : (
        <div className="text-4xl font-tourneyItalic text-center mt-9">
          You have not created anything yet
        </div>
      )}
    </>
  );
};

Timeline.Circle = () => {
  return (
    <div className="rounded-full w-5 h-5 bg-gradient-to-r from-blue-700 to-sky-400 mx-auto border border-black"></div>
  );
};

Timeline.Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-gradient-to-b from-blue-700 to-sky-400 mx-auto border-black"></div>
  );
};
