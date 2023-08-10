
const controller = {
    getCities : (req,res) => {
        res.json([
            {name:'Buenos Aires',country:'Argentina',img:''},
            {name:'Paris',country:'France',img:''},
            {name:'Madrid',country:'Spain',img:''},
        ])
    },
    putCities:'',
    postCities: '',
    deleteCities: '',
}

export default controller;