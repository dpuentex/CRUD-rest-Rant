const React = require("react");
const Def = require("../default");

// Define the function component named Index, which takes a data object as its argument
function Index({ places }) {
  // Map over the places array to generate JSX elements representing each place
  let placesFormatted = places.map((place) => (
    <div key={place.name} className="col-sm-6">
      {/* Render the name, cuisines, image, and location information for each place */}
      <h2>{place.name}</h2>
      <p className="text-center">{place.cuisines}</p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
    </div>
  ));

  // Return the JSX representing the list of places wrapped in the Def component
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

// Export the Index component as the default export from the module
module.exports = Index;
