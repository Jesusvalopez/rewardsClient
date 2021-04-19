import { AUTH, LOGIN_IN, AUTH_ERROR } from "../constants/actionsTypes";
import * as api from "../api";

export const SignIn = (formData, history) => async (dispatch) => {
  try {
    // login
    const { data } = await api.signIn(formData);
    dispatch({ type: LOGIN_IN, payload: false });
    history.push("/auth/redirect?token=" + data.token);
  } catch (error) {
    dispatch({ type: LOGIN_IN, payload: false });
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
    console.error(error.response.data); // ***
    console.error(error.response.status); // ***
    console.error(error.response.headers);
  }
};

export const SignUp = (formData, history) => async (dispatch) => {
  try {
    // register
    const { data } = await api.signUp(formData);

    // dispatch({ type: AUTH, data });
    dispatch({ type: LOGIN_IN, payload: false });
    history.push("/auth/redirect?token=" + data.token);
  } catch (error) {
    dispatch({ type: LOGIN_IN, payload: false });
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
    console.error(error.response.data); // ***
    console.error(error.response.status); // ***
    console.error(error.response.headers);
  }
};

export const FacebookSignUp = (formData, history) => async (dispatch) => {
  try {
    // register
    const { data } = await api.facebookSignUp(formData);

    dispatch({ type: AUTH, data });
    dispatch({ type: LOGIN_IN, payload: false });
    redirect(data, history);
  } catch (error) {
    console.log(error);
  }
};
export const GoogleSignUp = (formData, history) => async (dispatch) => {
  try {
    // register
    const { data } = await api.googleSignUp(formData);

    dispatch({ type: AUTH, data });
    dispatch({ type: LOGIN_IN, payload: false });

    redirect(data, history);
  } catch (error) {
    console.log(error);
  }
};

const redirect = (data, history) => {
  if (data.result.commune) {
    history.push("/home");
  } else {
    history.push("/wheel-of-fortune");
  }
};
