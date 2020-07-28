export function createAction(type, payload) {
  return payload == undefined ? { type } : { type, payload };
}
