import { createContext, useState } from 'react';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [places, setPlaces] = useState(() => {
    const savedPlaces = JSON.parse(localStorage.getItem('places')) || {};
    return savedPlaces;
  });

  const getUserPlaces = (uid) => {
    return places[uid] || [];  // Return user's places
  };

  const addPlace = (uid, newPlace) => {
    const updatedPlaces = {
      ...places,
      [uid]: [...(places[uid] || []), newPlace]
    };
    setPlaces(updatedPlaces);
    localStorage.setItem('places', JSON.stringify(updatedPlaces));
  };

  return (
    <PropertyContext.Provider value={{ getUserPlaces, addPlace }}>
      {children}
    </PropertyContext.Provider>
  );
};
