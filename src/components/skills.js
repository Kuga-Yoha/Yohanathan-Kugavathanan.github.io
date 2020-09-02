import React from "react";
import { SiSkillshare } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";

const Skills = ({ skills, database, webTech }) => {
  const skillList = skills.map((skill) => {
    return (
      <span key={skill}>
        <VscDebugBreakpointLog /> {skill}
        <br />
      </span>
    );
  });

  const databaseList = database.map((db) => {
    return (
      <span key={db}>
        <VscDebugBreakpointLog /> {db}
        <br />
      </span>
    );
  });

  const webtechList = webTech.map((webt) => {
    return (
      <span key={webt}>
        <VscDebugBreakpointLog />
        {webt}
        <br />
      </span>
    );
  });

  return (
    <div>
      <IconContext.Provider value={{ style: { "padding-right": "10px" } }}>
        <h4>
          <SiSkillshare />
          Skills
        </h4>
        {skillList}
        <h4>
          <FaDatabase />
          Database{" "}
        </h4>
        {databaseList}
      </IconContext.Provider>
      <h4>
        <IconContext.Provider
          value={{ style: { color: "#242552", "padding-right": "10px" } }}
        >
          <CgWebsite />
          Web Technology
        </IconContext.Provider>
      </h4>
      <IconContext.Provider value={{ style: { "padding-right": "10px" } }}>
        {webtechList}
      </IconContext.Provider>
    </div>
  );
};

export default Skills;
