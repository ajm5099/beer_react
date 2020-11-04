import React from "react";
import HelloBootstrap from "./components/HelloBootstrap";
import beers from "./beers.json";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import BeerCard from "./components/BeerCards";

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <div class="row">
        <BeerCard
          name={beers[0].name}
          type={beers[0].type}
          description={beers[0].description}
          image={beers[0].image}
          abu={beers[0].abu}
        />
        <BeerCard
          name={beers[1].name}
          type={beers[1].type}
          description={beers[1].description}
          image={beers[1].image}
          abu={beers[1].abu}
        />
        <BeerCard
          name={beers[2].name}
          type={beers[2].type}
          description={beers[2].description}
          image={beers[2].image}
          abu={beers[2].abu}
        />
      </div>

    </div>

  );
}

export default App;
