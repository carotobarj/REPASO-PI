import {React} from 'react';
import {Link} from 'react-router-dom';
import { getCharacters, getEpisodes, postCharacter } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import Cards from '../Cards/Cards';


export default function Home(){
    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.characters);
    const allEpisodes = useSelector(state => state.episodes);
    

    useEffect(() => {
        dispatch(getCharacters());
        dispatch(getEpisodes());
        dispatch(postCharacter());
    }, [dispatch]);

    return(
        <div className="home-page">

            <h1>Welcome to the Ricky & Morty App</h1>

            <div className='titulo'>
                <Link to="/character"> CREAR PERSONAJE </Link>
                </div>
            {
                allCharacters?.map(el =>{
                    return(
                        <div className='container'>
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

{/* {console.log(allCharacters)} */}

        </div>
    )
}