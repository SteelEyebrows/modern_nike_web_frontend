import client from "../client";


export const setAdatptive = (id) =>
    client.get(`adaptive/${id}`);
