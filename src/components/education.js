import React from "react";
import { FaUniversity } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Education = ({ education }) => {
  return (
    <div>
      <h4>
        <IconContext.Provider value={{ style: { "padding-right": "10px" } }}>
          <FaUniversity />
          Education{" "}
        </IconContext.Provider>
      </h4>
      <p>
        <span className="college">
          {education.college}
          <br />
          {education.special}
        </span>
        <br />
        <ul className="education">
          <li>
            CGPA:&nbsp;
            {education.CGPA}({education.CGPAYear})
          </li>
          <li>
            Expected Graduation Date-
            {education.graduationDate}
          </li>
        </ul>
        <b>
          {education.school}
          <br />
          {education.AL}
          <br />
          {education.OL}
        </b>
      </p>
    </div>
  );
};

export default Education;
