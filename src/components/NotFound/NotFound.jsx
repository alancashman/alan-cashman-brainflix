import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found__container">
      <h1 className="not-found__heading">404 - Page not found!</h1>
      <img
        src="http://localhost:5000/images/404.jpeg"
        alt="dog with eyes closed"
        className="not-found__img"
        title="Maybe if you opened your eyes you'd have better luck finding things"
      />
      <h3 className="not-found__subheading">
        Click{" "}
        <Link to="/" className="not-found__link">
          here
        </Link>{" "}
        to return home
      </h3>
    </div>
  );
}

export default NotFound;
