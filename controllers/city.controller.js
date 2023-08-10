
const controller = {
    getCities : (req,res) => {
        res.json([
            {name:'Buenos Aires',country:'Argentina',img:'https://i.ibb.co/YB84MFz/hike-by-a-smoky-river.jpg'},
            {name:'Paris',country:'France',img:'https://i.ibb.co/Hpb6f59/eiffel-tower-on-cloudy-day.jpg'},
            {name:'Madrid',country:'Spain',img:'https://i.ibb.co/RCHNSHz/pexels-alex-azabache-3722818.jpg'},
            {name:'Nueva Delhi',country:'India',img:'https://i.ibb.co/qJk0zfk/camels-resting.jpg'},
            {name:'Bangkok',country:'Thailand',img:'https://i.ibb.co/18VC3nf/golden-thailand-canyon-sunset.jpg'},
            {name:'Roma',country:'Italy',img:'https://i.ibb.co/Dbdpgr9/roman-holiday.jpg'},
            {name:'Baku',country:'Azerbaijan',img:'https://i.ibb.co/58rNwGx/person-stands-on-rocks-poking-out-of-the-ocean-shoreline.jpg'},
            {name:'Tokyo',country:'Japan',img:'https://i.ibb.co/MhmpmMJ/commuters-on-the-streets-of-neon-tokyo.jpg'},
            {name:'Seoul',country:'South Korea',img:'https://i.ibb.co/1qmsKwM/tourists-visit-an-intricate-structure.jpg'},
            {name:'Vienna',country:'Austria',img:'https://i.ibb.co/h12YrCQ/apartments-overlooking-a-canal.jpg'},
            {name:'Santiago',country:'Chile',img:'https://i.ibb.co/6RcXqHN/pexels-alexis-leandro-jeria-bocca-17347192.jpg'},
            {name:'Cancun',country:'Mexico',img:'https://i.ibb.co/56j9pWR/pexels-ricky-esquivel-1802255.jpg'},
            {name:'Havana',country:'Cuba',img:'https://i.ibb.co/b3ZD7gF/pexels-alex-azabache-3182452.jpg'},
            {name:'London',country:'England',img:'https://i.ibb.co/QcL9x9M/telephone-booth-in-london-england.jpg'},
            {name:'New York',country:'United States',img:'https://i.ibb.co/TwcMD12/un-ending-new-york-skyline.jpg'},
        ])
    },
    putCities:'',
    postCities: '',
    deleteCities: '',
}

export default controller;