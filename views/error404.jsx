const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img
          src="https://cdn.vox-cdn.com/thumbor/CFMj4-hMrtcXVGHbYDIAn1erFAg=/0x0:1500x996/1200x800/filters:focal(630x378:870x618)/cdn.vox-cdn.com/uploads/chorus_image/image/70956853/ComingAttractions_Close_2.0.jpg"
          alt="Chia Fruit Shake"
        />
      </main>
    </Def>
  );
}

module.exports = error404;
