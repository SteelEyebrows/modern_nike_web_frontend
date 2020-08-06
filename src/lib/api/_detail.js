import client from "../client";


export const getDetail = (id) =>
    client.get(`detail/${id}`);

    export default {
        getDetail
    };