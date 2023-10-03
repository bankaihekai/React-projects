// use to render anchor element (prevent http request)
import { Link } from "react-router-dom";
// use to navigate to links when - button not good example
// use for timer expire or something etc.
// import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  // programmatic imperative navigation code
  // const navigate = useNavigate();
  // const navigateHandler = () => {
  //   navigate("/products");
  // };

  return (
    <>
      <h1>
        Home Page -------- <Link to="/products">Product</Link>
      </h1>
      {/* <button onClick={navigateHandler}>Navigate</button> */}
    </>
  );
};

export default HomePage;
