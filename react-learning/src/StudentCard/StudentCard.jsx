import style from "./StudentCard.module.css";
import PropTypes from "prop-types";

function StudentCard({name = "Guest", age = 18, isStudent = false}) {
  return (
    <div className={style.card}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
StudentCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default StudentCard;
