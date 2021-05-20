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
      time: "3:29",
      favorite: false
    },
    {
      name: "Breakfast Kingdom",
      artist: "Denny, ft. lil Ihop",
      time: "4:00",
      favorite: false
    },
    {
      name: "World's giving out Lemons",
      artist: "Cynical Cynics",
      time: "5:23",
      favorite: false
    },
  ];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
    // try block for catching errors
    try {
      // remove all songs from database
      await Song.remove({});
      // add the seed data to the database
      await Song.create(songSeed);
      // get full list of songs to confirm seeding worked
      const songs = await Song.find({});
      // return full list of songs as JSON
      res.json(songs);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // Index Route
  router.get("/", async (req, res) => {
    try {
      console.count()
      // query database for all the songs
      const songs = await Song.find({});
      // send songs as JSON
      console.count()
      res.json(songs);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // CREATE Route
  router.post("/", async (req, res) => {
    try {
      // pass the request body to create a new song in the database
      const newSong = await Song.create(req.body);
      // send newly created song back as JSON
      res.json(newSong);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // update Route
  router.put("/:id", async (req, res) => {
    try {
      // pass the request body to update and existing song in the database
      const updatedSong = await Song.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      // send newly updated song back as JSON
      res.json(updatedSong);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // delete Route
  router.delete("/:id", async (req, res) => {
      try {
        // delete existing song in the database
        const deletedSong = await Song.findByIdAndRemove(req.params.id);
        // send delete song back as JSON
        res.json(deletedSong);
      } catch (error) {
        // return error as JSON with an error status
        res.status(400).json(error);
      }
    });
  
// export the router which has all our routes registered to it
module.exports = router;