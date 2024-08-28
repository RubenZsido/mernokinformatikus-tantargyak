/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { SubjectComponent } from "./Components/SubjectComponent";
import { subjects } from "./Data/data";

function App() {
  const nullSubject = {
    name: "",
    semester: 0,
    id: "0",
    requirements: [],
    type: 0,
  };

  //type 0: Kötelező tárgyak
  //type 1: Kötelezően választható szakmai tantárgycsoport
  //type 2: Választható tantárgycsoport
  const [selected, useSelected] = useState(nullSubject);

  const clicked = (subject) => {
    console.log("clicked");
    if (selected.id === subject.id) {
      useSelected(nullSubject);
    } else {
      useSelected(subject);
    }
  };

  // Group subjects by semester
  const groupedBySemester = subjects.reduce((acc, subject) => {
    if (!acc[subject.semester]) {
      acc[subject.semester] = [];
    }
    acc[subject.semester].push(subject);
    return acc;
  }, {});

  const semesterColumns = Object.keys(groupedBySemester).map((semester) => (
    <div key={semester} style={{ flex: 1, margin: "0 10px" }}>
      <h4>{semester}. Félév</h4>
      {groupedBySemester[semester].map((subject) => (
        <SubjectComponent
          key={subject.id}
          currentSelected={selected}
          subject={subject}
          handleClick={clicked}
        />
      ))}
    </div>
  ));

  return (
    <div>
      {" "}
      <div style={{ display: "flex", width: "100%" }}>{semesterColumns}</div>
    </div>
  );
}

export default App;
