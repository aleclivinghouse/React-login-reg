import axios from 'axios';


import {
  GET_CURRENT_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';


export const getCurrentProfile = ()=> dispatch =>{
  dispatch(setProfileLoading());
  axios.get('/api/profile')
  .then(res=>
    dispatch({
     type: GET_CURRENT_PROFILE,
     payload: res.data
    })
  )
  .catch(err=>
  dispatch({
     type: GET_CURRENT_PROFILE,
     payload: {}
   })
 );
};



export const createProfile = (profileData, history) => dispatch => {
  axios
      .post('/api/profile', profileData)
      .then(res => history.push('/dashboard'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};


export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
