import React from "react";
//import kuga from "../kuga.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdCall } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { IconContext } from "react-icons/lib";

//import "../App.css";

const Person = ({ person }) => {
  return (
    <div>
      {/* <img
        alt="profile"
        style={{ height: "140px", width: "150px" }}
        className="profile"
      /> */}
      <br />
      <span className="name">
        <b>
          {person.fname}&nbsp;
          <br /> {person.lname}
        </b>
      </span>
      <br />
      <span className="job">{person.job}</span>
      <br />

      <h4>
        {" "}
        <IconContext.Provider value={{ style: { "padding-right": "10px" } }}>
          <BsFillPersonFill />
          Profile
        </IconContext.Provider>
      </h4>

      <span className="pdescription"> {person.profile}</span>
      <br />
      <h4>
        <IconContext.Provider value={{ style: { "padding-right": "10px" } }}>
          {" "}
          <MdContacts /> Contact
        </IconContext.Provider>
      </h4>

      <IconContext.Provider
        value={{ style: { color: "#fff", "padding-right": "10px" } }}
      >
        <MdCall />
        {person.tp} <br />
        <MdEmail />
        {person.email}
      </IconContext.Provider>
    </div>
  );
};

export default Person;
