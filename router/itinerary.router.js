import express from 'express'
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router();

const {createItinerary,getItineraries,getItinerary,updateItinerary,deleteItinerary} = itineraryController;

router.post('/',createItinerary)
router.get('/',getItineraries)
router.get('/:id',getItinerary)
router.put('/:id',updateItinerary)
router.delete('/:id',deleteItinerary)

export default router;