import React, { useState, useContext, useEffect } from 'react';
import { PropertyContext } from '../context/PropertyContext';
import { validateCoordinates } from '../utils/validations';

const UpdateProperty = ({ pid }) => {
  const { properties, updateProperty } = useContext(PropertyContext);
  const [property, setProperty] = useState({
    title: '',
    description: '',
    address: '',
    lat: '',
    lng: '',
    imageUrl: ''
  });

  useEffect(() => {
    const currentProperty = properties.find(p => p.id === pid);
    if (currentProperty) setProperty(currentProperty);
  }, [pid, properties]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCoordinates(property.lat, property.lng)) {
      alert('Invalid coordinates');
      return;
    }
    updateProperty(pid, property);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={property.title}
        onChange={(e) => setProperty({ ...property, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={property.description}
        onChange={(e) => setProperty({ ...property, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={property.address}
        onChange={(e) => setProperty({ ...property, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Latitude"
        value={property.lat}
        onChange={(e) => setProperty({ ...property, lat: e.target.value })}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={property.lng}
        onChange={(e) => setProperty({ ...property, lng: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={property.imageUrl}
        onChange={(e) => setProperty({ ...property, imageUrl: e.target.value })}
      />
      <button type="submit">Update Property</button>
    </form>
  );
};

export default UpdateProperty;
