const React = require("react");
const Def = require("../default");

const show = (data) => {
  // cuisines is comma separated string, E.g. "Italian, Chinese, Mexican"
  const cuisinesBadges = data.place.cuisines.split(",").map((cuisine) => {
    return (
      <span key={cuisine} className="badge rounded-pill text-bg-info me-2">
        {cuisine}
      </span>
    );
  });

  return (
    <Def>
      <main className="container">
        <div className="row align-items-start">
          <div className="col">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col">
            <h1>{data.place.name}</h1>

            <p>{cuisinesBadges}</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              <i className="bi bi-pencil"></i> Edit
            </a>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>

            <form action={`/places/${data.id}?_method=DELETE`} method="POST">
              <button type="submit" className="btn btn-danger">
                <i className="bi bi-trash"></i> Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
};

// <form action={`/places/${data.id}?_method=DELETE`} method="POST">
//               <button type="submit" className="btn btn-danger">
//                 <i className="bi bi-trash"></i> Delete
//               </button>
//             </form>

module.exports = show;
