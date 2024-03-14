import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  console.log(id);

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:3000/api`);
    if (res.data) {
      setUsers(res.data);
    } else {
      alert("No Users")
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  function SubmitDelete(id) {
    setLoading(true);

    axios
      .delete(`http://localhost:3000/api/deletedata/` + id)
      .then((result) => console.log("Success"))
      .catch((err) => {
        console.log("Error");
      });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0D6EFD", // Set the height of the container to the full viewport height
  };

  if (loading) {
    return (
      <div style={styles}>
        <center>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </center>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin Pannel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/user">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-60 bg-white rounded p-3">
          <h1 className="text-center mb-4">Admin Panel</h1>
          <Link to="/create" className="btn btn-primary">
            Add New
          </Link>

          <table className="table">
            <thead>
              <tr>
                <th>Id</th>

                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Image</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((users) => {
                  return (
                    <tr>
                      <td>{users._id}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.mobileNo}</td>
                      <td>{users.userImage ? <img width={30} height={30} src= {users.userImage} alt="user profile" /> : "No image" } </td>
                      <td>{users.designation}</td>
                      <td>{users.selectedGender}</td>
                      <td>{users.course}</td>
                      <td>{users.createDate}</td>
                      <td>
                        <Link
                          to={`/update/${users._id}`}
                          className="btn btn-primary"
                        >
                          Update
                        </Link>
                        &nbsp;
                        <button
                          onClick={(e) => {
                            SubmitDelete(users._id);
                          }}
                          className="btn btn-primary"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
