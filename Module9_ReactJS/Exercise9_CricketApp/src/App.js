import "./App.css";

import ListofPlayers from "./Components/ListofPlayers";
import Scorebelow70 from "./Components/Scorebelow70";
import OddPlayers from "./Components/OddPlayers";
import EvenPlayers from "./Components/EvenPlayers";
import ListofIndianPlayers from "./Components/ListofIndianPlayers";

function App() {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shubman Gill", score: 65 },
    { name: "KL Rahul", score: 55 },
    { name: "Hardik Pandya", score: 80 },
    { name: "Ravindra Jadeja", score: 72 },
    { name: "Ravichandran Ashwin", score: 68 },
    { name: "Mohammed Shami", score: 45 },
    { name: "Jasprit Bumrah", score: 60 },
    { name: "Kuldeep Yadav", score: 50 },
    { name: "Mohammed Siraj", score: 40 }
  ];

  const indianPlayers = ["Virat", "Rohit", "Gill", "Rahul", "Hardik", "Jadeja"];

  return (
    <div className="App">
      <h1>Cricket Application</h1>
      <ListofPlayers players={players} />
      <Scorebelow70 players={players} />
      <div className="sections">
        <OddPlayers players={indianPlayers} />
        <EvenPlayers players={indianPlayers} />
      </div>
      <ListofIndianPlayers players={indianPlayers} />
    </div>
  );
}

export default App;