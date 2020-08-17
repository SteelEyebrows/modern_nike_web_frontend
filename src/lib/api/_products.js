import client from "../client";


export const getMenProducts = (id) =>
    client.get(`products/men/${id}`);

export const getWomenProducts = (id) =>
    client.get(`products/women/${id}`);
        
    
export default {
    getMenProducts,
    getWomenProducts
};