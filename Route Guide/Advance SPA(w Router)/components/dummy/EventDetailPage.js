// import { useParams, Link, useLoaderData, json } from "react-router-dom";
import {
  Link,
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../EventItem";
import EventsList from "../EventsList";
import { Suspense } from "react";

function EventDetailPage() {
  // const params = useParams();
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        {/* <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>> */}

        <Await resolve={event}>
          {(loaderEvent) => <EventItem event={loaderEvent} />}
        </Await>
      </Suspense>
      
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={events}>
          {(loaderEvents) => <EventsList events={loaderEvents} />}
        </Await>
        {/* <EventItem event={data.event} />
          <Link to=".." relative="path">
            Back
          </Link> */}
      </Suspense>
    </>
  );
}

export default EventDetailPage;

// test function --------------------------------------------------

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    // setError("Fetching events failed.");
    // return {isError: true, message: 'Could not fetch events'};
    // throw new Response(JSON.stringify({message: 'Could not fetch events!'}, {status: 500}));
    // throw new Error('Could not fetch events');
    throw json(
      { message: "Cound not fetch details for selected Events" },
      { status: 500 }
    );
  } else {
    // const resData = await response.json();
    // return resData.events;
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // setError("Fetching events failed.");
    // return {isError: true, message: 'Could not fetch events'};
    throw new Response(
      JSON.stringify({ message: "Could not fetch events!" }, { status: 500 })
    );
    // throw new Error('Could not fetch events');
    // throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

// loader function --------------------------------------------------

export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
  // const response = await fetch("http://localhost:8080/events/" + id);

  // if (!response.ok) {
  //   // setError("Fetching events failed.");
  //   // return {isError: true, message: 'Could not fetch events'};
  //   // throw new Response(JSON.stringify({message: 'Could not fetch events!'}, {status: 500}));
  //   // throw new Error('Could not fetch events');
  //   throw json(
  //     { message: "Cound not fetch details for selected Events" },
  //     { status: 500 }
  //   );
  // } else {
  //   // const resData = await response.json();
  //   // return resData.events;
  //   return response;
  // }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete Event" }, { status: 500 });
  }
  return redirect("/events");
}
