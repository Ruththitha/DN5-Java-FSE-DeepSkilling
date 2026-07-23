import "./App.css";

import CalculateScore from "./Components/CalculateScore";

function App() {

  return (

    <div className="App">

      <CalculateScore

        name="Ruththitha"

        school="ABC Higher Secondary School"

        total={475}

        goal={5}

      />

    </div>

  );

}

export default App;