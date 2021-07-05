const { json } = require("express");
const Router = require("express");
const fetch = require("node-fetch");

const router = new Router();

const KEY = "a8b41c15e324e0d91e81da6cb7488f69";

const TOKEN = `5ac3b5cc2abc4485821398a0641754d7e2c63211`;
const SECRET = `c23f1c53e2a69753f0804ae16602a68bd56d3f4b`;

router.get("/", async (req, res) => {
  try {
    let responce = await fetch("http://ipwhois.app/json/?lang=ru")
    responce = await res.json()
    return res.json(responce)
  } catch (error) {
    console.log(error);
    return res.send({ message: "Server find geolocation error" });
  }
});

router.get("/city", async (req, res) => {
  try {
    let city = req.query.city
    let query = String(city);
    let options = {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + TOKEN,
        "X-Secret": SECRET,
      },
      body: JSON.stringify([query]),
    };
     let response = await fetch(`https://cleaner.dadata.ru/api/v1/clean/address`, options)
     response = await response.text()
     return res.send(response)

  } catch (error) {
    console.log(error);
    return res.send({ message: "Server get city error" });
  }
})


router.get("/weather", async (req, res) => {
  try {
     let lat = req.query.lat
     let lon = req.query.lon
     if(!lat || !lon){
       return res.status(400).json({message: 'coordinates not found'})
     }
     let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&lang=ru&units=metric&appid=${KEY}`)
     response = await response.json()
     return res.send(response)
  } catch (error) {
    console.log(error);
    return res.send({ message: "Server get weather error" });
  }
})

module.exports = router