import City from '../models/city.model.js'


const controller = {
    getCities : async (req,res) => {
        try {
            const cities = await City.find(req.body)
            return res.status(200).json({
                cities,
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at getting the events'
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
    putCities:'',
    deleteCities: '',
}
export default controller;