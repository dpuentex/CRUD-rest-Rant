const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "https://media-cdn.tripadvisor.com/media/photo-s/10/14/c8/05/front-of-entrance-to.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "https://catsherdyou.com/wp-content/uploads/2099/12/O_Cat_Cafe_000_wm.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
