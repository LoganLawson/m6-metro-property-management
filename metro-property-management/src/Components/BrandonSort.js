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

  const map = properties.map((x) => x.street);

  const quickSort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  return (
    <div>
      <h2>Quick Sort Brandon</h2>
      <Link to="/Home">
        <h6>home</h6>
      </Link>
      <button onClick={() => console.log(quickSort(map))}>Sort Names</button>
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
