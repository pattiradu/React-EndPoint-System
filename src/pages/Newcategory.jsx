import axios from "axios";
import React, { useState } from "react";
import parameters from "../partials/parameters";
import { useNavigate } from "react-router-dom";

function Newcategory() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSave = async () => {
    const payload = `<xmldata><name>${name}</name></xmldata>`;
    const { data } = await axios.post(parameters.url, payload, {
      "Content-Type": "application/xml",
    });
    navigate('/')
  };

  return (
    <div className="container my-4">
      <div className="d-flex flex-column justify-content-center justify-content-center">
        <h1>new category</h1>
        <div className="d-flex align-items-end gap-3">
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Category Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={handleSave}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newcategory;
