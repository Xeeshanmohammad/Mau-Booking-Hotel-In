const express = require("express");
const router = express.Router();
const Room = require("../Models/RoomBookingModel");
const Hotel = require("../Models/HotelModel");
const { verifyAdmin } = require("../utils/token");

router.post("/createRooms/:Hotelid", verifyAdmin, async (req, res, next) => {
  let HotelId = req.params.Hotelid;
  let newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(HotelId, {
        $push: { rooms: savedRoom._id },
      });
      res.status(201).json(savedRoom);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/updateRoom/:id", verifyAdmin, async (req, res) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ msg: "Successfully updated", updateRoom });
  } catch (error) {
    res.status(500).json({ message: "Nothing will be updated" });
  }
});

router.delete("/deleteRoom/:id/:Hotelid", verifyAdmin, async (req, res) => {
  let HotelId = req.params.Hotelid;
  try {
    const deleteRoom = await Room.findByIdAndDelete(req.params.id);
    try {
        await Hotel.findByIdAndUpdate(HotelId, {
          $pull: { rooms: req.params.id},
        });
      } catch (error) {
        next(error);
      }
    res.status(200).json({ msg: "Successfully deleted", deleteRoom });
  } catch (error) {
    res.status(500).json({ message: "Nothing will be deleted" });
  }
});

router.get("/getAllRooms", async (req, res) => {
  try {
    const getAllRooms = await Room.find({});
    res.status(200).json({ getAllRooms, counts: getAllRooms.length });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/getRoom/:id", async (req, res) => {
  try {
    const getRoom = await Room.findById({});
    res.status(200).json({ getRoom });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
