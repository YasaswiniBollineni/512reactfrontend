// // Contact.js

// import React from 'react';
// import './Contact2.css';

// const Contact2 = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <p>
//         We would love to hear from you! Feel free to reach out to us with any questions or inquiries.
//       </p>
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" placeholder="Your Name" />

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" placeholder="Your Email" />

//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message" placeholder="Your Message"></textarea>

//         <button type="submit">Add</button>


//       </form>
//     </div>
//   );
// };

// export default Contact2;
import React, { useState } from "react";
import './Three.css';
const Three = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message:"",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        message:"",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        message:"",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email, message: tempData.message });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
  <div className="contact-container">
      <div className="min-h-screen bg-[#004b43]">
      <h1 className="text-center">Contact us</h1>
      <div className="bg-[#e5e4e4] max-w-fit m-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Name</label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label>Message</label>
            <input name="message" value={inputs.message} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-[#014d64] text-white mt-3">
            {editClick ? "update" : "Add"}
          </button>
        </form>
      </div>
      <div>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-yellow-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default Three;