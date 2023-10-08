// import { useEffect, useState } from 'react';

import { Suspense } from "react";
import EventsList from "../EventsList";
// import { useLoaderData, json } from "react-router-dom";
import { useLoaderData, defer, Await } from "react-router-dom";

export default function EventsPage() {
  //   const [isLoading, setIsLoading] = useState(false);

  const { events } = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;
  // return <EventsList events={events} />;
  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}

// import { Link } from "react-router-dom";

// function EventPage() {
//   const eventsList = [
//     { id: "event1", title: "Event 1" },
//     { id: "event2", title: "Event 2" },
//     { id: "event3", title: "Event 3" },
//   ];
//   return (
//     <>
//       <main>
//         <ul>
//           {eventsList.map((event) => (
//             <li key={event.id}>
//               <Link to={`/events/${event.id}`}>{event.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }

// export default EventPage;

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

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
