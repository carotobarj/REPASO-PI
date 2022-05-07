import { GET_CHARACTERS, GET_EPISODES,POST_CHARACTER } from './actions';


const initialState = {
    characters: [],
    episodes: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            };
        case GET_EPISODES:
            return {
                ...state,
                episodes: action.payload
            }
            case POST_CHARACTER:
                return{
                    ...state,
                    
                }
        default:
            return state;
    }

}

