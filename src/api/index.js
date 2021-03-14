import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization =
      "Bearer " + JSON.parse(localStorage.getItem("profile")).token;
  }

  return req;
});

export const fetchCoupons = () => API.get("/coupons");
export const fetchMyCoupons = () => API.get("/coupons/my-coupons");
export const fetchMyCouponsCount = () => API.get("/coupons/my-coupons-count");
export const fetchExchangeCoupons = () => API.get("/coupons/exchange-coupons");
export const exchangeCoupon = (exchangeCoupon) =>
  API.post("/coupons/exchange-coupons", exchangeCoupon);
export const createCoupon = (newCoupon) => API.post("/coupons", newCoupon);
export const updateCoupon = (id, updatedCoupon) =>
  API.patch("/coupons/" + id, updatedCoupon);
export const deleteCoupon = (id) => API.delete("/coupons/" + id);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const googleSignUp = (formData) =>
  API.post("/user/google-signup", formData);

export const fetchMyPoints = (page) =>
  API.get("/points/my-points?page=" + page);
