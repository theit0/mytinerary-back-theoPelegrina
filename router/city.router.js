import express from 'express'
import cityController from '../controllers/city.controller.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

const {getCities,createCities,getCityById,updateCity,deleteCity} = cityController;

router.get('/',getCities)
router.get('/:id',getCityById)
router.post('/',createCities)
router.put('/:id',isAdmin,updateCity)
router.delete('/:id',
    isAdmin,
    deleteCity //Solo se ejecuta si el middleware isAdmin verifica que el usuario es admin
)

export default router;