import React from "react";
import { Link, useHistory } from "react-router-dom";
import { getEpisodes, postCharacter } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function CharacterCreated() {
    const dispatch = useDispatch();
    const allEpisodes = useSelector((state) => state.episodes);
    const history = useHistory();
    const [input, setInput] = useState({
        name: '',
        species: '',
        origin: '',
        image: '',
        episodes: [],
    })
    useEffect(() => {
        dispatch(getEpisodes())
    }, [dispatch]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postCharacter(input));
        history.push('/home');
    }
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            episodes: [...input.episodes, e.target.value]
        })
        
    }
function handleDelete(el) {
    setInput({
        ...input,
        episodes: input.episodes.filter(episodes => episodes !== el)
    })
    console.log(input.episodes)
}

    return (
        <div className="container">
            <Link to="/home"><button>Back to Home</button></Link>
            <h1>CREA TU PERSONAJE</h1>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" value={input.name} name='name' onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label>Especie:</label>
                        <input type="text" value={input.species} name='species' onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label>Origin:</label>
                        <input type="text" value={input.origin} name='origin' onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label>Imagen:</label>
                        <input type="text" value={input.image} name='image' onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label>Episodios:</label>
                        <select onChange={(e) => handleSelect(e)}>
                            {allEpisodes && allEpisodes.map((e) => {
                                return (<option value={e.id}>{e.name}</option>)
                            })}
                        </select>
                        <ul><li>{input.episodes.map(el => el + ", ")}</li></ul>
                    </div>
                    <button type='submit'>Crear</button>
                </form>
            </div>
            {input.episodes.map(el =>
                <div key={el} className='delEpisode'> 
                <p> {el}</p>
                <button className='btnX' onClick={() => handleDelete(el)}>X</button>
                </div>
                )}
        </div>
    )
}
