// const app = require("express")()
const {
    app
} = require('./expressConfig');

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