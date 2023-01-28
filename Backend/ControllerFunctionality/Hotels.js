const express = require("express");
const router = express.Router();
const Hotel = require("../Models/HotelModel");
const Errors = require("../utils/error");
const { verifyAdmin } = require("../utils/token");

router.post("/HotelRegistration", verifyAdmin, async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(201).json({ success: true, saveHotel });
  } catch (error) {
    res.status(500).json({ message: "Oops! something went wrong" });
  }
});

router.put("/updateHotels/:id", verifyAdmin, async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ msg: "Successfully updated", updateHotel });
  } catch (error) {
    res.status(500).json({ message: "Nothing will be updated" });
  }
});

router.delete("/deleteHotels/:id", verifyAdmin, async (req, res) => {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Successfully deleted", deleteHotel });
  } catch (error) {
    res.status(500).json({ message: "Nothing will be deleted" });
  }
});

router.get("/getAllHotels", async (req, res) => {
  try {
    const getAllHotels = await Hotel.find({});
    // const getAllHotels = await Hotel.findById('ashsdhds')

    res.status(200).json({ getAllHotels, counts: getAllHotels.length });
    //    return  next(Errors(401,'something wentwrong'))
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/getHotel/:id", async (req, res) => {
  try {
    const getHotel = await Hotel.findById({});
    res.status(200).json({ getHotel });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/countHotelByCity", async (req, res, next) => {
    const cities = req.query.cities.split(',')
  try {
    const getHotelList = await Promise.all(cities.map((city)=>{
        return Hotel.countDocuments({city:city})
    }));
    res.status(200).json({ getHotelList });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
