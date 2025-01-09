const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
  try {
    const div = 1 / 2;
    div = "a";
    console.log(div);
    res.json({ msg: "Hello user from user's index" });
  } catch (e) {
    throw new Error("constant variable is not reassigned");
  }
});

userRouter.get("/:name", (req, res) => {
  res.json({ msg: `Hello ${req.params.name} from user's index` });
});

userRouter.post("/", (req, res) => {
  res.json({ msg: "create new user" });
});

userRouter.put("/:id", (req, res) => {
  res.json({ msg: `Updating all data of ${req.params.id}` });
});

userRouter.patch("/:id", (req, res) => {
  res.json({ msg: `Updating a data of ${req.params.id}` });
});

userRouter.delete("/:id", (req, res) => {
  res.json({ msg: `deleting a  data of ${req.params.id}` });
});

module.exports = userRouter;
