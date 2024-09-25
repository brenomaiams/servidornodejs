import express from "express";
import contratanteRoutes from "./routes/contratante-routes.js";
import sequelize from "./shared/connection.js";
import { Contratante } from "./models/contratante-model.js";

const app = express();
app.use(express.json());
const PORT = 3000;


//rotas aqui !
app.get("/", (req, res) =>  {
    res.status(200).send("Unifio Nodejs API - now using ts");

});

app.use("/", contratanteRoutes);

(async () => {
    try {
        //testar a conexão !
        await sequelize.authenticate();
        console.log("Modelo sincronizado com o banco de dados.");

        //start o server !
        app.listen(PORT, () => {
            console.log("Server correndo na porta", PORT);
        });
        }catch (error) {
            console.error("Não foi possível conectar com o banco de dados!")
        }
        });

        export default app;
