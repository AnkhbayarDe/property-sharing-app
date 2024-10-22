import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PropertyContext } from '../context/PropertyContext';

const Places = () => {
  const { uid } = useParams();
  const { getUserPlaces } = useContext(PropertyContext);
  const places = getUserPlaces(uid);  // Fetch user's places based on uid

  return (
    <div>
      <h2>Your Places</h2>
      <ul>
        {places && places.length > 0 ? (
          places.map((place) => (
            <li key={place.id}>
              <Link to={`/places/${place.id}`}>
                <h3>{place.headline}</h3>
              </Link>
              <p>{place.description}</p>
            </li>
          ))
        ) : (
          <p>No places found. Add a new one!</p>
        )}
      </ul>
      <Link to="/places/new">Add New Place</Link>
    </div>
  );
};

export default Places;
