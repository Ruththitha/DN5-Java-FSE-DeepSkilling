import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {

  test('should return repository names for techiesyed', () => {
    const repos = [
      { id: 1, name: 'react-basics' },
      { id: 2, name: 'jest-mocking-demo' },
      { id: 3, name: 'spring-boot-microservices' }
    ];

    const resp = { data: repos };

    // Mock axios.create() to return an object whose .get() resolves with resp
    axios.create.mockReturnThis();
    axios.get.mockResolvedValue(resp);

    const gitClient = new GitClient();

    return gitClient.getRepositories('techiesyed').then(data => {
      expect(data).toEqual(['react-basics', 'jest-mocking-demo', 'spring-boot-microservices']);
    });
  });

});