import "bootswatch/dist/vapor/bootstrap.min.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center container-fluid align-content-center">
      <h1>
        OOOPSSS... something was wrong
        <br />
        (sorry for this dude)
      </h1>
      <Link href={"/"}>
        <button className="btn btn-primary">BACK HOME</button>
      </Link>
    </div>
  );
};
export default NotFound;
