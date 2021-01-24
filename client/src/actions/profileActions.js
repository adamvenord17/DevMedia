import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE } from './types';

//get current profile
export const getCurrentProfile = ()=> async dispatch => {
    try {
        dispatch(setProfileLoading());
        const res = await axios.get('/api/profile');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
          });   
      } catch (err) {        
        dispatch({
          type: GET_PROFILE,
          payload: {}
        });
      }
}

//profile loading
export const setProfileLoading = ()=>{
    return{
        type: PROFILE_LOADING
    }
}

//clear current profile 
export const clearCurrentProfile = ()=>{
    return{
        type: CLEAR_CURRENT_PROFILE
    }
}

// Create or update profile
export const createProfile = (profileData,history)=> async dispatch=>{
    try{
        const res = await axios.post('/api/profile', profileData);
        history.push('/dashboard');   
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
} 