import express from 'express'
import cityController from '../controllers/city.controller.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

const {getCities,createCities,getCityById,updateCity,deleteCity} = cityController;

router.get('/',getCities)
router.get('/:id',getCityById)
router.post('/', passport.authenticate('jwt',{session:false}), createCities)
router.put('/:id',passport.authenticate('jwt',{session:false}),updateCity)
router.delete('/:id',
    passport.authenticate('jwt',{session:false}),
    isAdmin,
    deleteCity //Solo se ejecuta si el middleware isAdmin verifica que el usuario es admin
)

export default router;