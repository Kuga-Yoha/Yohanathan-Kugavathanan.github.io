import React, { Component } from "react";
import Projects from "./components/projects";
import Education from "./components/education";
import Referees from "./components/referees";
import Person from "./components/person";
import Skills from "./components/skills";
import Form from "./components/form";
import { BiCommentAdd } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import "./App.css";

class App extends Component {
  state = {
    person: {
      fname: "Kugavathanan",
      lname: "Yohanathan",
      job: "undergraduate",
      profile:
        "An endaevouring student keen to learn new concepts, designs and create new innovations",
      tp: "076-5567226",

      email: "kugavathanan@outlook.com",
    },

    skills: ["Java"],
    database: ["sql"],
    webTech: ["html", "css", "js"],
    projects: [
      {
        name: "Apartment Management System",
        description:
          "Developed a web based application for an apartment. It consists of subsytems such as employee , owners , tenants , visitors  and  assets management systems. I had developed the employee management system in it.",
        lang: "JAVA,JSP,HTML, CSS,MYSQL",
      },
      {
        name: "Hotel Management System",
        description:
          "Developed a web based application for a hotel." +
          "\n" +
          " The system includes room management, and booking management subsystems. I was involved  mainly in room management.",
        lang: "JAVA, JSP,HTML, CSS, MYSQL",
      },
    ],
    education: {
      college: "Sri Lanka Institute of Information Technology(SLIIT)",
      special: "B.Sc.Special(Hons) - Information Technology (Specialization)",
      CGPA: "3.0",
      CGPAYear: "2nd year 1st Semester",
      graduationDate: "February 2023",
      school: "Hindu College- Bambalapitiya",
      AL: "G.C.E Advanced Level (Aug 2015)",
      OL: "G.C.E Ordinary Level (Dec 2012)",
    },

    referee: [
      {
        name: "Ms.Anjalie Gamage",
        special: "Bsc in IT(Special Hons), Bsc in Physical Science, Msc in IT",
        job: "Senior Lecturer",
        workplace: "Faculty of Computing,SLIIT",
        email: "anjalie.g@sliit.lk",
      },
    ],
  };

  render() {
    return (
      <div id="wrap">
        <div className="side-left">
          <Person person={this.state.person} />
          <Skills
            skills={this.state.skills}
            database={this.state.database}
            webTech={this.state.webTech}
          />
        </div>
        <div className="side-right">
          <Education education={this.state.education} />
          <Projects projects={this.state.projects} />
          <Referees referees={this.state.referee} />
          <h4 className="contact-header">
            <IconContext.Provider
              value={{ style: { "padding-right": "10px" } }}
            >
              <BiCommentAdd /> Contact Form
            </IconContext.Provider>
          </h4>
          <Form className="contact-form" />
        </div>
      </div>
    );
  }
}

export default App;
