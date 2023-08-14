import City from '../models/city.model.js'


const controller = {
    getCities : async (req,res) => {

        let queries = {}
        if(req.query.name) {
            queries.name = new RegExp(`^${req.query.name}`,'i')
        } 

        //Si quiero otra query hago otro if

        try {
            const cities = await City.find(queries)
            
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
            const newCity = await City.create(req.body).populate('user')
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
    putCities:'',
    deleteCities: '',
}
export default controller;