import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddProperty = () => {
  const { uid } = useParams();
  const [newPlace, setNewPlace] = useState({ title: '', description: '', address: '', latitude: '', longitude: '', image: '' });

  const handleAddPlace = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.name === uid);

    if (user) {
      user.places.push(newPlace);
      localStorage.setItem('users', JSON.stringify(users));
      // Redirect to user's places page
      window.location.href = `/${uid}/places`;
    }
  };

  return (
    <form onSubmit={handleAddPlace}>
      <input
        type="text"
        placeholder="Title"
        value={newPlace.title}
        onChange={(e) => setNewPlace({ ...newPlace, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newPlace.description}
        onChange={(e) => setNewPlace({ ...newPlace, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={newPlace.address}
        onChange={(e) => setNewPlace({ ...newPlace, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Latitude"
        value={newPlace.latitude}
        onChange={(e) => setNewPlace({ ...newPlace, latitude: e.target.value })}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={newPlace.longitude}
        onChange={(e) => setNewPlace({ ...newPlace, longitude: e.target.value })}
      />
      <input
        type="url"
        placeholder="Image URL"
        value={newPlace.image}
        onChange={(e) => setNewPlace({ ...newPlace, image: e.target.value })}
      />
      <button type="submit">Add Place</button>
    </form>
  );
};

export default AddProperty;
