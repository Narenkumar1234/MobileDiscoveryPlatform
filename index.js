const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connection");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/smartz/build")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/smartz/build")));
}

app.use(cors());
app.use(express.json());

//sort
app.get(
  "/:mobileName/:price([0-9]{4,5})/:battery([0-9]{4})/:camera([0-9]{2})/:display(([0-9]*[.])?[0-9]+)/:search/:sort",
  async (req, res) => {
    try {
      const { mobileName } = req.params;
      const { price } = req.params;
      const { battery } = req.params;
      const { camera } = req.params;
      const { display } = req.params;
      const { sort } = req.params;
      const mobileList = await pool.query(
        "SELECT * FROM " +
          mobileName +
          " Where batt >= " +
          battery +
          " and cam >= " +
          camera +
          " and priceint <= " +
          price +
          " and disp >= " +
          display +
          " ORDER BY priceint " +
          sort
      );
      res.json(mobileList.rows);
    } catch (err) {
      console.log(err.message);
    }
  }
);

//unsorted
app.get(
  "/:mobileName/:price([0-9]{4,5})/:battery([0-9]{4})/:camera([0-9]{2})/:display(([0-9]*[.])?[0-9]+)/:search",
  async (req, res) => {
    try {
      const { mobileName } = req.params;
      const { price } = req.params;
      const { battery } = req.params;
      const { camera } = req.params;
      const { display } = req.params;
      const mobileList = await pool.query(
        "SELECT * FROM " +
          mobileName +
          " Where batt >= " +
          battery +
          " and cam >= " +
          camera +
          " and priceint <= " +
          price +
          " and disp >= " +
          display
      );
      res.json(mobileList.rows);
    } catch (err) {
      console.log(err.message);
    }
  }
);
//sorted
app.get(
  "/:price1([0-9]{4,5})/:price2([0-9]{4,5})/:search/:sort",
  async (req, res) => {
    try {
      const { price1 } = req.params;
      const { price2 } = req.params;
      const { sort } = req.params;
      const mobileList = await pool.query(
        " SELECT * FROM complete WHERE priceint >= " +
          price1 +
          " and priceint <= " +
          price2 +
          " ORDER BY priceint " +
          sort
      );
      res.json(mobileList.rows);
    } catch (err) {
      console.log(err.message);
    }
  }
);

//unsorted
app.get(
  "/:price1([0-9]{4,5})/:price2([0-9]{4,5})/:search",
  async (req, res) => {
    try {
      const { price1 } = req.params;
      const { price2 } = req.params;
      const mobileList = await pool.query(
        " SELECT * FROM complete WHERE priceint >= " +
          price1 +
          " and priceint <= " +
          price2
      );
      res.json(mobileList.rows);
    } catch (err) {
      console.log(err.message);
    }
  }
);

//sorted
app.get("/:mobileName/:search/:sort", async (req, res) => {
  try {
    const { mobileName } = req.params;
    const { sort } = req.params;

    const mobileList = await pool.query(
      " SELECT * FROM " + mobileName + " ORDER BY priceint " + sort
    );
    res.json(mobileList.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//unsorted
app.get("/:mobileName/:search", async (req, res) => {
  try {
    const client = await pool.connect();
    const { mobileName } = req.params;

    const mobileList = await pool.query(" SELECT * FROM " + mobileName);

    // Release the client back to the pool
    client.release();

    // Set cache control headers to prevent caching
    res.set("Cache-Control", "no-store");

    res.json(mobileList.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//sorted
app.get("/:mobileName/:price([0-9]{4,5})/:search/:sort", async (req, res) => {
  try {
    const { mobileName } = req.params;
    const { price } = req.params;
    const { sort } = req.params;

    const mobileList = await pool.query(
      " SELECT * FROM " +
        mobileName +
        " WHERE priceint <= " +
        price +
        " ORDER BY priceint " +
        sort
    );
    res.json(mobileList.rows);
  } catch (err) {
    console.log("Hello6");

    console.log(err.message);
  }
});

//unsorted
app.get("/:mobileName/:price([0-9]{4,5})/:search", async (req, res) => {
  try {
    const { mobileName } = req.params;
    const { price } = req.params;
    const mobileList = await pool.query(
      " SELECT * FROM " + mobileName + " WHERE priceint <= " + price
    );
    res.json(mobileList.rows);
  } catch (err) {
    console.log("Hello7");

    console.log(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "smartz/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening @ port ${PORT}`);
});
