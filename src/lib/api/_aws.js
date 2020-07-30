import {API, graphqlOperation } from 'aws-amplify';

// export const getAws = async(query) =>{
//   await API.graphql(graphqlOperation(query))
//      .then(data => data);
//    };

export const getAws = async(query) => 
  await API.graphql(graphqlOperation(query));