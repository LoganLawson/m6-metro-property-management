import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BrandonSort() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/properties").then((response) => {
      setProperties(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Quick Sort Brandon</h2>
      <Link to="/Home">
        <h6>home</h6>
      </Link>

      {properties.map((val) => {
        return (
          <div key={val.id}>
            <p>{val.street}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BrandonSort;
