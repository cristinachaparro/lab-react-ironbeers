import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

function BeerDetails() {
  const [beerDetails, setBeerDetails] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeerDetails(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div class="single-beer-container">
        <img
          class="beer-img"
          src={beerDetails.image_url}
          alt={beerDetails.name}
          width={"250px"}
        />
        <h3>{beerDetails.name}</h3>
        <p>{beerDetails.tagLine}</p>
        <p>{beerDetails.first_brewed}</p>
        <p>{beerDetails.attenuation_level}</p>
        <p class="description">{beerDetails.description}</p>
        <p class="tagline">
          <b>{beerDetails.contributed_by}</b>
        </p>
      </div>
    </div>
  );
}

export default BeerDetails;
