const { Router } = require("express");
const axios = require("axios");
const { Character, Episode } = require("../db")
const router = Router();

const allCharactersApi = async (req, res) => {
    try {
        const getInfoApi = await axios.get(`https://rickandmortyapi.com/api/character`)
        let characterApi = getInfoApi.data.results.map((el) => {
            return {
                id: el.id,
                name: el.name,
                species: el.species,
                origin: el.origin.name,
                image: el.image,
                episode: el.episode.map((e) => e.name)
            }
        })
        return characterApi;
    
        console.log(characterApi)
        
    } catch (error) {
        console.log(error);
    }
}

const getAllEpisodes = async () =>{
    let episodesApi = await axios.get(`https://rickandmortyapi.com/api/episode`)
    let episodeApi = await episodesApi.data.results.map((el)=>{
        return{
            id: el.id,
            name: el.name,
        }
     })
    return episodeApi
}

const getAllInfo = async ()=>{
    let characterInfo = await allCharactersApi();
    let episodeInfo = await getAllEpisodes();
    let infoTotal = characterInfo.concat(episodeInfo);
    return infoTotal;

}
router.get("/character", async (req, res) => {
    const charactersApi = await getAllInfo();
    res.json(charactersApi);
   
})


// Configurar los routers





module.exports = router;
