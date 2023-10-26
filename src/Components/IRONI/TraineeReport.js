import React, { useEffect, useState } from "react";
import "../../Styles/TraineeReport.css";
import logo from "../../images/logo.png";
import "../../Styles/Navbar.css";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Link, useParams, useNavigate } from "react-router-dom";

function TraineeReport() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await axios.get("https://garmnetresearch.onrender.com/notes");
    const postsData = response.data;
    setPosts(postsData);
  };

  const deletePost = async (id) => {
    await axios.delete(`https://garmnetresearch.onrender.com/notes/${id}`);
    loadPosts();
    alert("Employee Successfully Deleted....")
  };

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = " All Employees Report";
    const headers = [["candidate", "name", "age", "joinDate", "rate"]];

    const data = posts.map((elt) => [
      elt.candidate,
      elt.name,
      elt.age,
      elt.joinDate,
      elt.rate,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };


  return (
    <div className="traineeReport">
      <nav class='navbar navbar-expand-lg'>
        <a class='navbar-brand d-flex justify-content-between ms-5' href='#'>
          <img src={logo} alt='' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link ms-5' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link ms-5' href='#'>
                Progress View
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link ms-5' href='#'>
                Progress Report
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link ms-5' href='#'>
                Contact Us
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link ms-5' href='#'>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h2>Defect Report</h2>

      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Candidate ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Joined Date</th>
            <th>Defect Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.candidate}</td>
              <td>{post.name}</td>
              <td>{post.age}</td>
              <td>{post.joinDate}</td>
              <td>{post.rate}</td>
              <td>
                <button onClick={() => deletePost(post.id)}>Delete</button>
                <Link className="btn btn-outline-primary mx-2" to={`/imageupload/${post.id}`}>
                  Defect
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <center>
        <button
          onClick={() => exportPDF()}
          className="btn btn-outline-success mx-2"
        >
          - Export All -
        </button>
        <Link
        className="btn btn-outline-primary mx-2"
        to={`/register`}
        style={{ position: 'column', top: 250, right: 30 }} // Add inline styles for positioning
      >
        Employee Register
      </Link>
      </center>
    </div>
  );
}

export default TraineeReport;
