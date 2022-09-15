import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoganSort() {
  const [properties, setProperties] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:3005/properties/")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  console.log(properties);
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h2>Quick Sort Logan</h2>
      <Link to="/Home">
        {" "}
        <h6>home</h6>{" "}
      </Link>
    </div>
  );
}

export default LoganSort;
