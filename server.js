const expess = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const routers = require("./router/route");
const conect = require("./database/database");
const app = expess();
/** app middlwares  */
app.use(morgan("tiny"));
app.use(cors());
app.use(expess.json());
config();

// Route
app.use("/api", routers);
/** appliaction port */
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
  try {
    res.json("get request");
  } catch (error) {
    res.json(error);
  }
});

conect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server conected on http/localhost:${port}`);
      });
    } catch (error) {
      console.log("error:conect database mongodb", error);
    }
  })
  .catch((error) => {
    console.log("error :not conect database mongidb", error);
  });
