import { Fragment } from "react";
import { TimelineCard } from "./timeline-card";

export const Timeline = ({ events }) => {
  return (
    <>
      {/* Will have to do something with the date where the user can search using a specific timeframe and it only shows past year or so of data */}
      {events.length > 0 ? (
        <div className="m-4 flex flex-col gap-y-3 mb-12">
          {/* Timeline card will be mapped with notes and letters */}
          <Timeline.Circle />
          {events.map((event) => (
            <Fragment key={event.id}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                {event.direction === "left" ? (
                  <TimelineCard
                    title={event.title}
                    content={event.content}
                    type={event.type}
                    eventInfo={event}
                  />
                ) : (
                  <div className="text-xl font-wallpoet text-end">
                    {event.dateCreated}
                  </div>
                )}
                <Timeline.Pillar />
                {event.direction === "right" ? (
                  <TimelineCard
                    title={event.title}
                    content={event.content}
                    type={event.type}
                    eventInfo={event}
                  />
                ) : (
                  <div className="text-xl font-wallpoet">
                    {event.dateCreated}
                  </div>
                )}
              </div>
              {event.id < events.length - 1 && <Timeline.Circle />}
            </Fragment>
          ))}
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
