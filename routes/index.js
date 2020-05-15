const express = require("express");
const login = require("../controllers/login.controller");
const signup = require("../controllers/signup.controller");
const router = express.Router();

const Routes = (passport) => {
  router.get("/", login.getLogin);

  router.post("/signin", login.postLogin(passport));

  router.get("/signup", signup.getSignUp);

  router.post("/signup", signup.postSignUp(passport));

  router.get("/signout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  return router;
};
//cấu hình multer
// const storage = multer.diskStorage({
//   destination: (req,file, cb) => {
//     cb(null, './uploads');
//   },
//   filename: (req,file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage : storage });

// router.post('/upload', upload.single('image'), (request, response) => {
//   let watch = new watch({
//     image: request.file.originalname,
//   });

//   watch.save(function (err) {
//     if (err) {
//       console.log(err);
//       return;
//     }else {
//       reponse.redirect('/index');
//     }
//   });
// });

module.exports = Routes;
