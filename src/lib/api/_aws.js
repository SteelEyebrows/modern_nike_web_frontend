import {API, graphqlOperation } from 'aws-amplify';
import * as graphql from '../../graphql';

export const getAws = (query) => 
  API.graphql(graphqlOperation(query));

export const csWriting = (query) =>
  API.graphql(graphqlOperation(graphql.createStudent, {input: query}));

  export default {
    getAws,
    csWriting
};