import React from "react";
import Button from "../../shared/formElements/Button";

import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return (
      <div>
        <h3>No place found! Maybe create one?</h3>
        <Button to="/places/new">Share place</Button>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {places.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
};

export default PlaceList;
