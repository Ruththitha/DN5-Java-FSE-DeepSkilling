import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([]);
  const userName = 'techiesyed';

  useEffect(() => {
    const gitClient = new GitClient();
    gitClient.getRepositories(userName).then(repos => {
      setRepositories(repos);
    });
  }, []);

  return (
    <div className="App">
      <h1>Repositories for {userName}</h1>
      <ul>
        {repositories.map((repoName, index) => (
          <li key={index}>{repoName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;