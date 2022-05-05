import axios from 'axios';

export const GET_CHARACTERS= 'GET_CHARACTERS';
export const GET_EPISODES = 'GET_EPISODES';

export function getCharacters() {
    return async function(dispatch) {
      const json = await axios.get('http://localhost:3001/characters');
      dispatch({
        type: GET_CHARACTERS,
        payload: json.data
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
    const json = await axios.get('http://localhost:3001/episodes');
    dispatch({
        type: GET_EPISODES,
        payload: json.data
    });
}
}

