/* eslint-disable react/prop-types */
export const SubjectComponent = ({ subject, currentSelected, handleClick }) => {
  const isSelected = currentSelected.id === subject.id;
  const isRequired = currentSelected.requirements.includes(subject.id);
  const thisRequiresSelected = subject.requirements.includes(
    currentSelected.id
  );

  const borderColor = isSelected
    ? "#2196F3"
    : isRequired
    ? "red"
    : thisRequiresSelected
    ? "yellow"
    : "darkgrey";

  const backgroundColor = isSelected
    ? "#ddffff"
    : isRequired
    ? "red"
    : thisRequiresSelected
    ? "yellow"
    : "lightgray";

  return (
    <div
      style={{
        borderLeft: "6px solid",
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        padding: "5px 10px",
        marginBottom: "10px",
        height: "200px",
        width: "10vw",
      }}
      onClick={() => {
        handleClick(subject);
      }}
    >
      <p>{subject.name}</p>
      <p>Kredit: {subject.credit}</p>
    </div>
  );
};
