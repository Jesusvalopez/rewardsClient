import { AUTH, LOGOUT } from "../constants/actionsTypes";
import * as api from "../api";

export const SignIn = (formData, history) => async (dispatch) => {
  try {
    // login
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = (formData, history) => async (dispatch) => {
  try {
    // register
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};

export const GoogleSignUp = (formData, history) => async (dispatch) => {
  try {
    // register
    const { data } = await api.googleSignUp(formData);

    dispatch({ type: AUTH, data });
    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};
