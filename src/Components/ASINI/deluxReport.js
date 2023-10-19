import React, { useEffect, useState } from "react";
import "../../Styles/TraineeReport.css";
import logo from "../../images/logo.png";
import "../../Styles/Navbar.css";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Import jspdf-autotable along with jsPDF
import { Link, useParams, useNavigate } from "react-router-dom";

function DeluxReport() {
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
    await axios.delete(`https://garmnetresearch.onrender.com/${id}`);
    loadPosts();
    alert("Employee Successfully Deleted....");
  };

  // Corrected function declaration without "export"
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = " All Employees Report";
    const headers = [["candidate", "name", "age", "joinDate", "dRate"]];

    const data = posts.map((elt) => [
      elt.candidate,
      elt.name,
      elt.age,
      elt.joinDate,
      elt.dRate,
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
      <header className="navbar">
        <ul>
          <img src={logo} alt="" />
          <li>Home</li>
          <li>Progress View</li>
          <li>Progress Report</li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </header>
      <h2>Dexterity Report</h2>
      <Link
        className="btn btn-outline-primary mx-2"
        to={`/register`}
        style={{ position: "absolute", top: 200, right: 30 }}
      >
        Employee Register
      </Link>

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
              <td>{post.dRate}</td>
              <td>
                <button onClick={() => deletePost(post.id)}>Delete</button>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/ImageUploaddefect/${post.id}`}
                >
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
            style={{
              background: "blue",
              padding: 10,
              color: "white",
              border: "none",
              borderRadius: 20,
            }}
          >
            - Export All -
          </button>
        </center>
    </div>
  );
}

export default DeluxReport;
