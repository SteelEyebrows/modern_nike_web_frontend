import { Auth } from "aws-amplify";

export const postLogin = (payload) =>
   Auth.signIn(payload.userName, payload.password);

export const postRegister = (payload) =>
   Auth.signUp(payload);

export default{
    postLogin,
    postRegister
}   