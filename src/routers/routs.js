const express = require('express')
const router = new express.Router()
const movie = require('../models/info')


// create a new movie
// router.post("/movies", (req, res) => {
//     const movies = new movie(req.body)
//     movies.save().then(() => {



//         res.status(201).send([movies])
//     }).cache((e) => {
//         res.send(e).send(e)
//     })
//     res.status(400).send('hello');
// })

// create a new movie
router.post("/movies", async (req, res) => {
    try {
        const movies = new movie(req.body);
        const createMovie = await movies.save();
        res.status(201).send(createMovie);

    } catch (error) {
        res.status(400).send(error);
    }
})

//read data
router.get("/movies", async (req, res) => {
    try {
        const movieData = await movie.find();
        res.send(movieData);
    } catch (error) {
        res.status(400).send(error);
    }
})

//get individual movie data
router.get("/movies/:id", async (req, res) => {//we can use name also
    try {

        const_id = req.params.id
        const movieData = await movie.findById(_id)
        if (!movieData) {
            return res.status(404).send();
        } else {
            req.send(movieData);
        }
    } catch (error) {
        res.status(500).send(error);


    }

})

//delete the record
router.get("/movies/id", async (req, res) => {//we can use name also

    try {
        const id = req.params.id;
        const deleteMovie = await movie.findByIdAndDelete(id);

        if (!deleteMovie) {
            return res.status(404).send();
        } else {
            req.send(deleteMovie);
        }

    } catch (error) {
        res.status(500).send(error);


    }

})

//update the data

router.patch("/movies/id", async (req, res) => {

    try {
        const _id = req.params.id;

        const updateMovie = await movie.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        req.send(updateMovie);

    } catch (error) {
        res.status(404).send(error);


    }

})

module.exports = router