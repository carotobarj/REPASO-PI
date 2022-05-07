import axios from 'axios';

export const GET_CHARACTERS= 'GET_CHARACTERS';
export const GET_EPISODES = 'GET_EPISODES';
export const POST_CHARACTER = 'POST_CHARACTER';

export function getCharacters() {
    return async function(dispatch) {
      const allCharacters = await axios.get("http://localhost:3001/characters");
      dispatch({
        type: GET_CHARACTERS,
        payload: allCharacters.data
      });
    }
}
// export function getCharacters() {
//   return function(dispatch) {
//     axios.get('http://localhost:3001/characters')
//       .then((response) => {
//         dispatch({
//           type: 'GET_CHARACTERS',
//           payload: response.data
//         });
//       });
//   }
// }

// export function getEpisodes() {
//     return function (dispatch) {
//         axios.get('http://localhost:3001/episodes')
//             .then((json) => {
//                 dispatch({
//                     type: 'GET_EPISODES',
//                     payload: json.data
//                 });
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
// }

export function getEpisodes(){
return async function(dispatch){
    const allEpisodes = await axios.get("http://localhost:3001/episodes");
    dispatch({
        type: GET_EPISODES,
        payload: allEpisodes.data
    });
}
}

export function postCharacter(character){
    return async function(dispatch){
        const json = await axios.post('http://localhost:3001/character', character);
        dispatch({
            type: POST_CHARACTER,
            payload: json.data
        });
    }
}

// export function postCharacter(){
//   return function(dispatch){
//     axios.post("http://localhost:3001/character")
//     .then((response)=>{
//       dispatch({
//         type: POST_CHARACTER,
//         payload: response.data
//       })
//     })
//   }
//}