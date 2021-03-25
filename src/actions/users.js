import * as api from "../api";

export const updateUserCommuneAction = (commune) => async (dispatch) => {
  try {
    const { data } = await api.updateUserCommune(commune);

    const userProfile = JSON.parse(localStorage.getItem("profile"));
    userProfile.result.commune = commune;
    localStorage.setItem("profile", JSON.stringify(userProfile));
  } catch (error) {
    console.log(error.message);
  }
};
