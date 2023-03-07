import React, { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>디테일 로딩중</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>리스트 로딩중</p>}>
        <Await resolve={events}>
          {loadEvents => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const res = await fetch("http://localhost:8080/events/" + id);

  if (!res.ok) {
    throw json(
      { message: "선택한 이벤트를 찾을 수 없습니다." },
      { status: 500 }
    );
  } else {
    const resData = await res.json();
    return resData.event;
  }
}

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

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  console.log(request.method);
  const res = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!res.ok) {
    throw json(
      {
        message: " 지울 수 없습니다.",
      },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
