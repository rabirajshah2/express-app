const userRouter = require("express").Router();

const checkRole = (sysRole = []) => {
  //sysRole = [] default function
  return (req, res, next) => {
    const { currentRole } = req.query;
    if (!currentRole && sysRole.length === 0) {
      next();
    } else {
      const roleExist = sysRole.includes(currentRole);
      if (!roleExist) throw new Error("Unauthorized User");
      next();
    }
  };
};

//everybody can see this because of middleware checkRole
userRouter.get("/", checkRole(), (req, res) => {
  try {
    res.json({ msg: "Hello user from user's index" });
  } catch (e) {
    throw new Error(e);
  }
});

//everybody can see this because of middleware checkRole
userRouter.get("/:name", checkRole(), (req, res) => {
  res.json({ msg: `Hello ${req.params.name} from user's index` });
});

// only user or admin can see this because of middleware checkRole
userRouter.post("/", checkRole(["user", "admin"]), (req, res) => {
  res.json({ msg: "Congratulations user, you can post now" });
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
