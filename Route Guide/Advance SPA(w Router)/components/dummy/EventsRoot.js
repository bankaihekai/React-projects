import { Outlet } from "react-router-dom";
import EventsNavigation from "../EventsNavigation";

function Root() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default Root;
