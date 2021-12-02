// const app = require("express")()
const {
    app
} = require('./expressConfig');

// model, which will update the view 
app.use("/", require("./frontend/model/api/basicCrud"))
app.use("/", require("./frontend/model/api/playground"))
// we'll also have the controller, which the user will use 


app.get("/", function(req, res) {
    res.render("layouts/dashboard", {
        layout: "main"
    })
})

// app.get("/dashboard", function(req, res) {
//     res.render("dashboard")
// })
// app.get('*', function(err, req, res, next) {
//     res.render('views/error', {
//         layout: 'error',
//         message: err,
//     });
// });
app.listen(3000, () => {
    console.log('app listening on port 3000');
});