import axios from 'axios';

class GitClient {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.github.com'
    });
  }

  getRepositories(userName) {
    return this.client
      .get(`/users/${userName}/repos`)
      .then(response => response.data.map(repo => repo.name));
  }
}

export default GitClient;