const express = require("express");

const app = express();

const db = require("./config/dataBase");

const user = require("./model/bookTable");

app.set("view engine", "ejs");

app.use(express.urlencoded());

app.get("/editData", (req, res) => {
  let id = req.query.id;
  user
    .findById(id)
    .then((data) => {
      return res.render("edit", { data });
    })
    .catch((err) => {
      console.log("error");
    });
});

app.get("/deleteData", (req, res) => {
  let id = req.query.id;
  user
    .findByIdAndDelete(id)
    .then((data) => {
      console.log("deleted");
      return res.redirect("/index");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.get("/", (req, res) => {
    return res.render("form");
});

app.get("/index",(req,res)=>{
  user.find({}).then((data) => {
    return res.render("index", { data });
  });
})

app.post("/insertData", (req, res) => {
  const { img,name, description, price, discount } = req.body;
  const id = req.body.id;
  if (id) {
    user
      .findByIdAndUpdate(id, { img, name, description, price, discount })
      .then((data) => {
        console.log("Updated");
        return res.redirect("/index")
      })
      .catch((err) => {
        console.log("error");
      });
  } else {
    user
      .create({
        img : img,
        name: name,
        description: description,
        price: price,
        discount: discount,
      })
      .then((data) => {
        console.log("data inserted!!");
        return res.redirect("/index");
      })
      .catch((err) => {
        console.log("error");
      });
  }
});

app.listen(8085, (err) => {
  if (!err) {
    console.log("http://localhost:8085");
  }
});
