const express = require('express');
const Song = require('../models/song');

const router = express.Router();

// Get hot songs based on views
router.get('/hot', async (req, res) => {
  try {
    const hotSongs = await Song.find().sort({ views: -1 }).limit(10);
    res.json(hotSongs);
  } catch (err) {
    console.error('Error fetching hot songs:', err);
    res.status(500).send(err.message);
  }
});

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).send(err.message);
  }
});

// Get a specific song by ID
router.get('/:id', async (req, res) => {
  try {
    const song = await Song.findOne({ id: req.params.id });
    if (!song) {
      return res.status(404).send('Song not found');
    }
    res.json(song);
  } catch (err) {
    console.error('Error fetching song:', err);
    res.status(500).send(err.message);
  }
});

// Create a new song
router.post('/', async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.status(201).json(newSong);
  } catch (err) {
    console.error('Error creating song:', err);
    res.status(500).send(err.message);
  }
});

// Update an existing song
router.put('/:id', async (req, res) => {
  try {
    const updatedSong = await Song.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!updatedSong) {
      return res.status(404).send('Song not found');
    }
    res.json(updatedSong);
  } catch (err) {
    console.error('Error updating song:', err);
    res.status(500).send(err.message);
  }
});

// Delete a song
router.delete('/:id', async (req, res) => {
  try {
    const deletedSong = await Song.findOneAndDelete({ id: req.params.id });
    if (!deletedSong) {
      return res.status(404).send('Song not found');
    }
    res.json(deletedSong);
  } catch (err) {
    console.error('Error deleting song:', err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
