import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return resources.map(record => <li key={record.title}>{record.title}</li>);
};

export default ResourceList;
