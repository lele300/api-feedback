const app = require("./config/config-express")();

app.listen(3000, () => {
    console.log("Servidor rodando...");
});