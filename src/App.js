import People from "./People";
import { useState } from "react";
import reviews from "./data";

function App() {
  const [people, setPeople] = useState(reviews);

  return (
    <main className="container">
      <article className="title">
        <h1>Our Reviews</h1>
        <article className="people">
          <People people={people} setPeople={setPeople} />
        </article>
      </article>

    </main>
  )
};

export default App;