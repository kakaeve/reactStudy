import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  //   //   if (data.isError) {
  //   //     return <p>{data.message}</p>;
  //   //   }
  //   const events = data.events;
  //   return <EventsList events={events} />;
  //console.log(events);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>로딩중</p>}>
      <Await resolve={events}>
        {loadedEvents => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "이벤트를 불러오지 못했어요" };
    // throw new Response(
    //   JSON.stringify({ message: "이벤트를 불러오지 못했습니다." }),
    //   { status: 500 }
    // );
    throw json({ message: "불러오지 못했습니다." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
