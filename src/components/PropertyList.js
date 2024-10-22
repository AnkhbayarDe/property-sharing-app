import React, { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

const PropertyList = () => {
  const { properties } = useContext(PropertyContext);

  return (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>{property.address}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
