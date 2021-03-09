import axios from 'axios'

const url = 'http://localhost:5000/coupons';

export const fetchCoupons = () => axios.get(url);
export const createCoupon = (newCoupon) => axios.post(url, newCoupon);
export const updateCoupon = (id, updatedCoupon) => axios.patch(url + '/' +id, updatedCoupon);
export const deleteCoupon = (id) => axios.delete(url + '/' +id);
