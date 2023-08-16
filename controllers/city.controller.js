import City from '../models/city.model.js'


const controller = {
    getCities : async (req,res) => {

        let queries = {}
        if(req.query.name) {
            queries.name = new RegExp(`^${req.query.name}`,'i')
        } 

        //Si quiero otra query hago otro if

        try {
            const cities = await City.find(queries).populate('user')
            
            if ( cities.length ) {
                return res.status(200).json({
                    success:true,
                    cities,
                })
            }
            return res.status(404).json({
                success:false,
                message: 'Error founding events'
            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at getting the events'
            })
        }
    },
    getCityById : async (req,res) => {
        try {
            const city = await City.findById(req.params.id)
            
            if ( city ) {
                return res.status(200).json({
                    success:true,
                    city
                })
            }
            return res.status(404).json({
                success:false,
                message: 'Error founding events'
            })

        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at getting the event'
            })
        }
    },
    createCities: async (req,res) => {
        try {
            const newCity = await City.create(req.body)
            return res.status(201).json({
                success:true,
                message: 'City created'
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at creating the city'
            })
        }
    },
    updateCity: async (req,res) => {
        try {
            await City.updateOne({_id:req.params.id},req.body)

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
    deleteCity: async (req,res) => {
        try {
            await City.deleteOne({_id:req.params.id},req.body)

            return res.status(200).json({
                success:true,
                message: "City deleted"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at deleting the city'
            })
        } 
    },
}
export default controller;