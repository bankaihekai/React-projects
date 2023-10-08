import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/dummy/HomePage";
import EventPage, { loader as eventLoader } from "./components/dummy/EventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./components/dummy/EventDetailPage";
import NewEventPage from "./components/dummy/NewEventPage";
import EditEventPage from "./components/dummy/EditEventPage";
import Root from "./components/Root";
import EventsRoot from "./components/dummy/EventsRoot";
import ErrorPage from "./components/dummy/ErrorPage";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "./components/dummy/Newsletter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventPage />,
              loader: eventLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: eventDetailAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                },
              ],
            },
            {
              path: "newEvent",
              element: <NewEventPage />,
              action: manipulateEventAction,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
