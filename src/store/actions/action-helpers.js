export function createAction(type, payload) {
  console.log(`payload=${type}__${payload}`);
  return payload == undefined ? { type } : { type, payload };
}
