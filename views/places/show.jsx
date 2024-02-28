const React = require("react");
const Def = require("../default");
const comment = require("../../models/comment");

const show = (data) => {
  // cuisines is comma separated string, E.g. "Italian, Chinese, Mexican"
  const cuisinesBadges = data.place.cuisines.split(",").map((cuisine) => {
    return (
      <span key={cuisine} className="badge rounded-pill text-bg-info me-2">
        {cuisine}
      </span>
    );
  });

  let comments = <h3 className="inactive">No comments yet!!!</h3>;
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }
    rating = <h3>{stars} stars</h3>;

    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
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
            <h2>Rating</h2>
            {rating}

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
        <h2>Comments</h2>
        {comments}
      </main>
    </Def>
  );
};

module.exports = show;
