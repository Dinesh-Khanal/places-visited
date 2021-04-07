import React from "react";
import { useParams } from "react-router-dom";

import "./UserPlaces.css";
import PlaceList from "../components/PlaceList";

export const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://www.templepurohit.com/wp-content/uploads/2016/05/Changu_Narayan_Temple.jpg",
    title: "Changu Narayan Temple",
    description:
      "The oldest temple of Nepal, build during the time of Likchhibi king Mandev",
    address: "Bhaktapur, Nepal",
    creator: "6065557cd98de15c6c631b20",
    location: { lat: 27.7032983, lng: 85.4302104 },
  },
  {
    id: "p2",
    imageUrl: "https://www.gpsmycity.com/img/gd_cover/3915.jpg",
    title: "Pashupati Temple",
    description: "A great holly place for Hindu, temple of god Shiva",
    address: "Kathmandu, Nepal",
    creator: "6065a4e3d98de15c6c631b25",
    location: { lat: 27.7104592, lng: 85.3465473 },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList places={loadedPlaces} />;
};

export default UserPlaces;
