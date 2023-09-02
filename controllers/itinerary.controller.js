import Itinerary from "../models/itinerary.model.js"


const controller = {
    getItineraries : async (req,res) => {


        try {
            const itineraries = await Itinerary.find()
            
            if ( itineraries.length ) {
                return res.status(200).json({
                    success:true,
                    itineraries,
                })
            }
            return res.status(404).json({
                success:false,
                message: 'Error founding itineraries'
            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at getting the itineraries'
            })
        }
    },
    getItinerary : async (req,res) => {
        try {
            const itinerary = await Itinerary.findById(req.params.id)
            
            if ( itinerary ) {
                return res.status(200).json({
                    success:true,
                    itinerary
                })
            }
            return res.status(404).json({
                success:false,
                message: 'Error founding itinerary'
            })

        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at getting the itinerary'
            })
        }
    },
    createItinerary: async (req,res) => {
        try {
            const newItinerary = await Itinerary.create(req.body)
            return res.status(201).json({
                success:true,
                message: 'Itinerary created'
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at creating the itinerary'
            })
        }
    },
    updateItinerary: async (req,res) => {
        try {
            await Itinerary.updateOne({_id:req.params.id},req.body)

            return res.status(200).json({
                success:true,
                message: "City updated"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at updating the city'
            })
        }
    },
    deleteItinerary: async (req,res) => {
        try {
            await Itinerary.deleteOne({_id:req.params.id},req.body)

            return res.status(200).json({
                success:true,
                message: "Itinerary deleted"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at deleting the itinerary'
            })
        } 
    },
}
export default controller;