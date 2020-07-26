import axios from "axios";


class Client {

  constructor() {
    this.axios = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: process.env.REACT_APP_REQUEST_TIMEOUT,
    });
  }
    get(path, payload = null) {
        return this.axios
        .get(path, payload)
        .then((response) => response);
    }

    post(path, payload) {
        return this.axios
        .post(path, payload)
        .then((response) => response);
    }

    put(path, payload) {
        return this.axios
        .put(path, payload)
        .then((result) => result);
    }

    delete(path, payload = null) {
        return this.axios
        .delete(path, payload)
        .then((result) => result);
    }
}

const client = new Client();

export default client;
