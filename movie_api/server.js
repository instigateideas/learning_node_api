const express = require("express")
const app = express()
const PORT = 8080

const movies = [
    {
      name: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      duration: "2h 22min",
      genre: ["Crime", "Drama"],
      rate: 9.3,
      id: 1,
    },
    {
      name: "The Godfather",
      year: 1972,
      director: "Francis Ford Coppola",
      duration: "2h 55min",
      genre: ["Crime", "Drama"],
      rate: 9.2,
      id: 2,
    },
];

app.listen(PORT, () =>{
    console.log(`Server running in port ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Hello World");
  });

const logger = (req, res, next) => {
console.log(`Request received at ${new Date()} on path ${req.url}`);
next();
};

app.use(logger);
app.use(express.json());

app.get("/api/movies", (req, res) => {
    res.send(movies);
});