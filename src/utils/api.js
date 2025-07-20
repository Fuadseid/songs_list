const BASE_URL = process.env.REACT_APP_BASE_URL;

export const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'API Error');
  }

  return response.json();
};
export const postArtist = (artistData) => 
  apiFetch('/song', {
    method: 'POST',
    body: JSON.stringify(artistData),
  });

export const deletArtist = (artistId)=>
    apiFetch(`/song/${artistId}`,{
      method:'DELETE'
    })

export const updateArtist = (id, artistData) => 
  apiFetch(`/song/${id}`, {
    method: 'PUT',
    body: JSON.stringify(artistData),
  });
export const fetchArtists = () => apiFetch('/song'); // Adjust endpoint as needed
