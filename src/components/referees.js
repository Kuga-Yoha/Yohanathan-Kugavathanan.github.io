import React from "react";
import { GoPerson } from "react-icons/go";
import { IconContext } from "react-icons/lib";
const Referees = ({ referees }) => {
  const refereeList = referees.map((referee) => {
    return (
      <div key={referee.name}>
        {referee.name}
        <br />
        {referee.special}
        <br />
        {referee.job}
        <br />
        {referee.workplace}
        <br />
        {referee.email}
        <br />
      </div>
    );
  });

  return (
    <div>
      <h4>
        <IconContext.Provider value={{ style: { "padding-right": "10px" } }}>
          <GoPerson />
          Referee{" "}
        </IconContext.Provider>
      </h4>
      {refereeList}
    </div>
  );
};

export default Referees;
