import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      firstname: '',
      picture: '',
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];

      this.setState({
        title: user.name.title,
        firstname: user.name.first,
        picture: user.picture.large,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { title, firstname, picture, loading } = this.state;

    if (loading) {
      return <p>Loading user...</p>;
    }

    return (
      <div className="user-card">
        <img src={picture} alt={firstname} />
        <h2>{title} {firstname}</h2>
      </div>
    );
  }
}

export default Getuser;