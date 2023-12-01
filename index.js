const express = require('express')
const app = express()
const puerto = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use('/', require('./routers/rutasWeb'));
app.use('/tabla', require('./routers/rutaTabla'))

app.use((req, res, next) => {
    res.status(404).render("404");
  });

app.listen(puerto, () => {
    console.log(`Servidor activo en el puerto ${puerto}`)
})

