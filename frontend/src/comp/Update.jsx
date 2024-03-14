import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import FileBase from "react-file-base64";
export default function Update() {
  const { id } = useParams();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNo, setMobileNo] = useState("");
  const [userImage, setUserImage] = useState("");
  const [designation, setDesignation] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [course, setCourse] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getData/` + id)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setMobileNo(result.data.mobileNo);
        setUserImage(result.data.userImage);
        setDesignation(result.data.designation);
        setSelectedGender(result.data.selectedGender);
        setCourse(result.data.course);
        setCreateDate(result.data.createDate);

        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function SubmitHandler(e) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      axios
        .put("http://localhost:3000/api/updatedata/" + id, {
          name,
          email,
          mobileNo,
          userImage,
          designation,
          selectedGender,
          course,
          createDate,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));

      window.location.href = "http://localhost:5173/user";
    }, 1000);
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
        <div className="w-50 bg-white rounded p-3">
          <h1 className="text-center mb-4">Create New User</h1>
          <form onSubmit={SubmitHandler}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
                Mobile No
              </label>
              <input
                onChange={(e) => setMobileNo(e.target.value)}
                type="text"
                className="form-control"
                id="mobileNo"
                placeholder="Enter your mobile number"
                value={mobileNo}
                required
              />
            </div>
            <img src={userImage} width={100} height={100} alt="" />
            <br />
            <br />
            <FileBase
              className="focus:outline-none w-full"
              required
              type="file"
              multiple={false}
              value={userImage}
              onDone={({ base64 }) => setUserImage(base64)}
            ></FileBase>
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <select
                onChange={(e) => setDesignation(e.target.value)}
                className="form-select"
                id="designation"
                value={designation}
                required
              >
                <option value="" disabled selected>
                  Select your designation
                </option>
                <option value="HR">HR</option>
                <option value="Sales Manager">Sales Manager</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  checked={selectedGender === "Male"}
                  onChange={() => setSelectedGender("Male")}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  checked={selectedGender === "Female"}
                  onChange={() => setSelectedGender("Female")}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>

           
            <div className="mb-3">
              <label htmlFor="course" className="form-label">Course</label>
              <div>
                <input
                  type="checkbox"
                  id="course-mca"
                  value="MCA"
                  onChange={(e) => setCourse(e.target.value)}
                />
                <label htmlFor="course-mca">MCA</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="course-bca"
                  value="BCA"
                  onChange={(e) => setCourse(e.target.value)}
                />
                <label htmlFor="course-bca">BCA</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="course-bse"
                  value="BSE"
                  onChange={(e) => setCourse(e.target.value)}
                />
                <label htmlFor="course-bse">BSE</label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="createDate" className="form-label">
                Create date
              </label>
              <input
                onChange={(e) => setCreateDate(e.target.value)}
                type="date"
                className="form-control"
                id="createDate"
                placeholder="Enter create date"
                value={createDate}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
