import Home from './Home';
import { useContext, useEffect } from 'react';
import {StatusContext} from './main';

export default function App() {
  const loginStatus = useContext(StatusContext);

  useEffect(()=>{
    console.log(loginStatus);
  });

  const [logStatus, setLogStatus] = useContext(StatusContext);

  const changeLogStatus = () => {
    setLogStatus(!logStatus);
    console.log(logStatus);
  };

  return (
    <>
      <Home />
      <button onClick={changeLogStatus}>change status</button>
    </>
  );
}