import {React} from 'react';
import {Link} from 'react-router-dom';
import { getCharacters, getEpisodes } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import Cards from '../Cards/Cards';


export default function Home(){
    const dispatch = useDispatch();
    const AllCharacters = useSelector(state => state.characters);
    const AllEpisodes = useSelector(state => state.episodes);
    

    useEffect(() => {
        dispatch(getCharacters());
        dispatch(getEpisodes());
    }, [dispatch]);

    return(
        <div className="home-page">

            <h1>Welcome to the Ricky & Morty App</h1>
            {
                AllCharacters?.map(el =>{
                    return(
                        <div >
                        <Cards 
                            key={el.id}
                            name={el.name}
                            species={el.species}
                            origin={el.origin}
                            image={el.image}
                            episode={el.episode}
                        />
                        </div>
                    )
                })
            }

        </div>
    )
}