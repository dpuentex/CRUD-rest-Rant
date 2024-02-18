const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="https://media.istockphoto.com/id/1081369140/photo/healthy-appetizing-red-smoothie-dessert-in-glasses.jpg?s=612x612&w=0&k=20&c=ayAj4LQwwNIdY3aJ7fmzzG4HP_vtGboSeiP-FFO6Wm8="
            alt="Chia Fruit Shake"
          />
          <div>
            Photo by <a href="AUTHOR_LINK">Person</a> on{" "}
            <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
