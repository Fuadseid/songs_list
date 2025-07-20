export const FETCH_ARTIST = 'FETCH_ARTIST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const REFETCH_ARTISTS = 'REFETCH_ARTISTS';


export const POST_ARTIST = 'POST_ARTIST';
export const POST_ARTIST_SUCCESS = 'POST_ARTIST_SUCCESS';
export const POST_ARTIST_ERROR = 'POST_ARTIST_ERROR';


export const DELET_ARTIST ='DELET_ARTIST';
export const DELET_ARTIST_SUCCESS = 'DELET_ARTIST_SUCCESS';
export const DELET_ARTIST_ERROR = 'DELET_ARTIST_ERROR'

export const UPDATE_ARTIST = 'UPDATE_ARTIST';
export const UPDATE_ARTIST_SUCCESS = 'UPDATE_ARTIST_SUCCESS';
export const UPDATE_ARTIST_ERROR = 'UPDATE_ARTIST_ERROR';

export const fetchartist =()=>({type:FETCH_ARTIST});
export const fetchusersSuccess = (artists)=>({
    type:FETCH_USERS_SUCCESS,
    payload:artists,
});
export const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});
export const postArtist = (artistData) => ({
  type: POST_ARTIST,
  payload: artistData,
});
export const postArtistSuccess = (artist) => ({
  type: POST_ARTIST_SUCCESS,
  payload: artist,
});
export const postArtistError = (error) => ({
  type: POST_ARTIST_ERROR,
  payload: error,
});

export const deletArtist = (artistId) => ({
  type: DELET_ARTIST,
  payload: artistId, 
});

export const deletArtistSuccess = (artistId) => ({
  type: DELET_ARTIST_SUCCESS,
  payload: artistId, 
});

export const deletArtistError = (error) => ({
  type: DELET_ARTIST_ERROR,
  payload: error,
});
export const refetchArtists = () => ({
  type: REFETCH_ARTISTS
});

export const updateArtist = (id, artistData) => ({
  type: UPDATE_ARTIST,
  payload: { id, ...artistData }
});

export const updateArtistSuccess = (artist) => ({
  type: UPDATE_ARTIST_SUCCESS,
  payload: artist
});

export const updateArtistError = (error) => ({
  type: UPDATE_ARTIST_ERROR,
  payload: error
});