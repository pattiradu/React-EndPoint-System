import axios from "axios";
import React, { useEffect, useState } from "react";
import parameters from "../partials/parameters";
import { Link } from "react-router-dom";

function Homepage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    const { data } = await axios.get(parameters.url);
    setCategories(data.category);
  };

  return (
    <div className="container my-3">
      <h1>All Categories</h1>

      {categories && (
        categories.map(category=>(
          <li key={category.id}>

            <Link to={'/category/'+category.id}>{category.name}</Link>

            


          </li>
        ))
      )}
    </div>
  );
}

export default Homepage;
