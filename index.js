import express   from "express"
import  axios  from "axios";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";



const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req,res)=>{
    // res.sendFile(__dirname+"/views/index.html")
<<<<<<< HEAD
    res.sendFile(__dirname+"/public/index.html"); 
    //res.send('Hello World!')
});

app.post("/", async(req,res)=>{
     try {
          const response = await axios.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark")
          res.send("./views/index.ejs"); 
          console.log( response.data)
     } catch (error) {
          res.status(404).send("you are done boi");      
     }


//     res.sendFile(__dirname+"/public/index.html"); 
    res.render("index.ejs");

});


app.post("/", async(req,res)=>{
     try {
          const response = await axios.get("https://v2.jokeapi.dev/joke/Programming")
          const result = response.data;

          if(result.type == "twopart")
          {
               console.log("tow work")
               res.render("index.ejs", {
                    setup : response.data.setup,
                    delivery : response.data.delivery,
               })
          }
          else{
               res.render("index.ejs", {
                    setup : response.data.joke,
               })
          }

     } catch (error) {
          res.send(error.message);      
         res.redirect("/");
     }
>>>>>>> 83189cb (create routes)
})


app.listen(3000, ()=>{
     console.log("running on port "+port)
})