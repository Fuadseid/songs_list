import {
  POST_ARTIST,
  POST_ARTIST_SUCCESS,
  POST_ARTIST_ERROR,
  FETCH_ARTIST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  DELET_ARTIST,
  DELET_ARTIST_SUCCESS,
  DELET_ARTIST_ERROR,
  REFETCH_ARTISTS,
  UPDATE_ARTIST,
  UPDATE_ARTIST_SUCCESS,
  UPDATE_ARTIST_ERROR
} from "../action/Action";

const initialState = {
  artists: [],
  loading: false,
  posting: false,
  deleting: false,
  updating: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, artists: action.payload };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case POST_ARTIST:
      return { ...state, posting: true, postError: null };
    case POST_ARTIST_SUCCESS:
      return {
        ...state,
        posting: false,
        artists: [...state.artists, action.payload],
      };
    case POST_ARTIST_ERROR:
      return { ...state, posting: false, postError: action.payload };
    case DELET_ARTIST:
      return { ...state, deleting: true, deleteError: null };

    case DELET_ARTIST_SUCCESS:
      return {
        ...state,
        deleting: false,
        artists: state.artists.filter((artist) => artist.id !== action.payload),
      };
    case REFETCH_ARTISTS:
      return { ...state, loading: true, error: null };

    case DELET_ARTIST_ERROR:
      return { ...state, deleting: false, deleteError: action.payload };
    
      case UPDATE_ARTIST:
      return { ...state, updating: true, error: null };
      
    case UPDATE_ARTIST_SUCCESS:
      return {
        ...state,
        updating: false,
        artists: state.artists.map(artist => 
          artist.id === action.payload.id ? action.payload : artist
        ),
      };
      
    case UPDATE_ARTIST_ERROR:
      return { ...state, updating: false, error: action.payload };
    default:
      return state;
  }

};

export default userReducer;
