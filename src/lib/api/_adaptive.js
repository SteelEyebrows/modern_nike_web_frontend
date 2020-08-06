import client from "../client";


export const getAdatptive = (id) =>
    client.get(`adaptive/${id}`);

export default {
    getAdatptive
};
      