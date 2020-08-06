import { Auth } from "aws-amplify";

export const postLogin = async(payload) =>
   await Auth.signIn(payload.userName, payload.password);

export default{
    postLogin
}   