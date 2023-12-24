const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));

app.engine("hbs", handlebars.engine({
    extname: ".hbs",
    layoutsDir: path.join(__dirname, 'src', 'view'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'view'));

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(port, () => {
    console.log("port: " + port);
    console.log("path", path.join(__dirname, 'src', 'view'));
});
