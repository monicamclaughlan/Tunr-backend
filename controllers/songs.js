// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Song = require("../models/song")

// SEED DATA FOR SEED ROUTE
const songSeed = [
    {
      title: "Yummy in my tummy",
      artist: "Yummy and the Yum Yums",
      time: ""
    },
    {
      name: "Breakfast Kingdom",
      img: "https://static.wikia.nocookie.net/lego-dimensions/images/4/45/BREAKFASTKINGDOMSECRET.JPG/revision/latest/scale-to-width-down/2000?cb=20161120194331",
      description: "The Breakfast Kingdom is a state located in the Desert Lands. It is ruled by Breakfast Princess, Toast Princess, and Strudel Princess and is inhabited by Breakfast People.",
    },
    {
      name: "Earldom of Lemongrab",
      img: "https://cdn.wallpapersafari.com/85/1/U5Qtek.png",
      description: "Earldom of Lemongrab (better known as Lemongrab) is an earldom currently ruled by the third Earl of Lemongrab. It is located in the Land of Ooo and is a subordinate territory of the Candy Kingdom.",
    },
  ];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database


//INDEX ROUTE - GET


// CREATE ROUTE - POST



// UPDATE ROUTE - PUT - FAVORITES


// DELETE ROUTE



// export the router which has all our routes registered to it
module.exports = router;