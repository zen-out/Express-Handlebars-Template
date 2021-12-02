// const app = require("express")()
const {
    app
} = require('./expressConfig');

app.use("/", require("./frontend/controller/pages/dashboard"))

app.get("/", function(req, res) {
    res.render("pageLogic/main/home", {
        layout: "main"
    })
})
app.listen(3000, () => {
    console.log('app listening on port 3000');
});