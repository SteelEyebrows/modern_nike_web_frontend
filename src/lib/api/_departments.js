import client from "../client";

export const getDepartments = (id) =>
  client.get(id);
