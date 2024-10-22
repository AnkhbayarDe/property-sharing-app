import React from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetails = () => {
  const { pid } = useParams();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const place = users.find((u) => u.places)?.places[pid] || {};

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;

  return (
    <div>
      <h2>{place.title}</h2>
      <img src={place.image} alt={place.title} />
      <p>{place.description}</p>
      <p>{place.address}</p>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
    </div>
  );
};

export default PlaceDetails;
