import app from "./app.js";
import {PORT} from "./config.js";


app.listen(PORT,"0.0.0.0"); // ANTES ERA 3000 dev , en prod es PORT
console.log("server running on port", PORT);
