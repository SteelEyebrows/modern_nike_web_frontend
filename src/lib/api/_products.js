import client from "../client";


export const getManProducts = (id) =>
    client.get(`products/man/${id}`);

export const getWomanProducts = (id) =>
    client.get(`products/woman/${id}`);
        
    
export default {
    getManProducts,
    getWomanProducts
};