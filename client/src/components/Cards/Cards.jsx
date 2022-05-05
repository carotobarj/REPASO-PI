import {React} from "react";


export default function Cards({name, species, origin, image, episode}){
    let filterEpisode =[]
    filterEpisode?.forEach(el => episode.push(el.name))
return (
    <div className="card">
        <h2>{name}</h2>;
        <img src={image} alt="img not found"/>
        <p>{species}</p>
        <p>{origin}</p>
        <p>{filterEpisode?.join(',')}</p>

    </div>
)
}