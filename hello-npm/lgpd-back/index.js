import { express, Router, urlencoded } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js"

import sequelize from "./utils/database.js";
import association from "./models/Associations.js";

import cors from "cors";


const app = express();
const { json, urlencoded } = pkg;


app.use(kson());
app.use(urlencoded({ exteded: true }));
app.use("/", router);
app.use(cors());




(async () => {
    try {
        association.associations();
        await sequelize.sync();
        app.listen(3000, function () {
            console.log("Listening from 3000")
        });

    } catch (error) {
        comsole.log(error);

    }
})();


app.use('/', router);

