import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  //   if (data.isError) {
  //     return <p>{data.message}</p>;
  //   }
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "이벤트를 불러오지 못했어요" };
    // throw new Response(
    //   JSON.stringify({ message: "이벤트를 불러오지 못했습니다." }),
    //   { status: 500 }
    // );
    return json({ message: "불러오지 못했습니다." }, { status: 500 });
  } else {
    return response;
  }
}
