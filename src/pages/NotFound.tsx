import style from "./NotFound.module.css";
import { Link } from "react-router-dom";
import url from "../assets/Images/404.png"; // Assuming you have a 404 image in your assets
const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div className={style.imageContainer}>
        <img src={url} alt="" />
      </div>
      <p>
        Something Went Wrong{" "}
        <Link to={"/"} className={style.link}>
          Go Back to Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
