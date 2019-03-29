import React, { useState } from 'react';
import ResourceList from '../components/ResourcerList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Post</button>
        <button onClick={() => setResource('todos')}>Todo</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
