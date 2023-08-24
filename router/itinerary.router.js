import express from 'express'
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router();

const {createItinerary,getItineraries} = itineraryController;

router.post('/',createItinerary)
router.get('/',getItineraries)

export default router;