import client from "../client";


export const getProducts = (id) =>
    client.get(`products/men/${id}`);
