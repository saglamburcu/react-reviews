import { useState, useEffect } from "react";
import Person from "./Person";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function People({ people }) {
  const [count, setCount] = useState(0);
  const [filteredPerson, setFilteredPerson] = useState(people[0]);

  useEffect(() => {
    setFilteredPerson(people[count]);
  }, [count]);

  const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    setCount(randomNumber);
  }

  return (
    <>
      <Person {...filteredPerson} />

      <div>
        <button className="left-btn" type="button" onClick={() => setCount((prev) => ((prev - 1 + 4) % 4))}>
          <FaChevronLeft />
        </button>
        <button className="right-btn" type="button" onClick={() => setCount((prev) => (prev + 1) % 4)}>
          <FaChevronRight />
        </button>
      </div>

      <button className="surprise-btn" onClick={generateRandomNumber}>Surprise Me</button>
    </>
  )
};

export default People;