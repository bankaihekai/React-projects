// useNavigation allow to check if transition is active if loading data 
// import { useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function Root() {
  // const navigation = useNavigation();
  
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default Root;
