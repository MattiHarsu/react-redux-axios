// This module is Actions part of the Redux functionality
// 
// CRUD related actions/functions are provided for React
// components:
// C = createPost - One is written to database
// R = fetchPosts - All data is retrieved from database (back-end)
// D = removePost - One record is deleted from database
// Actions are used data handling between fron and back
//
import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';
import axios from '../axios';


// Time 42:24, check ES6 syntax !!
export function fetchPosts(){
    return function(dispatch){
        axios.get('/posts.json')
          .then(response => {
            console.log("Fetch Posts, axios: Then");
            const parsedData = Object.values(response.data);
            //this.setState({posts: parsedData});
            dispatch({
                type: FETCH_POSTS,
                payload: parsedData
            });
          })
          .catch(function (error) {
            console.log(error); /* eslint-disable-line no-console */
          })               
        }
    }

export function createPost(postData){
    return function(dispatch) {    
         console.log("Create Post, axios: Alkaa");
         axios.patch('/posts/'+postData.id+'.json', postData)
            .then( response => {
              console.log("Create Post, axios: Then");
                dispatch({
                    type: NEW_POST,
                    payload: response.data
                });
            })
            .catch(function(error) {
               console.log(error);/* eslint-disable-line no-console */
            }) 
    }
}

export function removePost(postData) {    
    return function(dispatch) {    
         console.log("Remove Post, axios: Alkaa");
         console.log(postData);
         axios.delete('/posts/'+postData.id+'.json')
            .then( response => {
              console.log("Remove Post, axios: Then");
                //const parsedData =  Object.values(response.data);
                dispatch({
                    type: DELETE_POST,
                    payload: postData
                });
            })
            .catch(function(error) {
               console.log(error);/* eslint-disable-line no-console */
            }) 
    }
}



