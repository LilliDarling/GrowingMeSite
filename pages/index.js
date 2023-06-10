import React from 'react';
import Navbar from 'components/Navbar';
import Button from 'components/ButtonGroup';


const IndexPage = () => {
  return (
    <div>
      <h1>Growing Me</h1>
      <Navbar />
      <Button to="/latestPosts">Latest Posts</Button>
      <Button to="/aboutMe">About Me</Button>
    </div>
  );
};

export default IndexPage;