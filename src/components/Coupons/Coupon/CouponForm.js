import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createCoupon, updateCoupon } from '../../../actions/coupons';
import { useSelector } from 'react-redux';
import { fn } from 'moment';

const CouponForm = ({currentId, setCurrentId}) => {

    const [couponData, setCouponData] = useState({
        value: 0,
        user: '',
        expireDate: ''
    });

    const coupon = useSelector((state) => currentId ? state.coupons.find((coupon) => coupon._id === currentId) : null);

    useEffect(() => {

        if(coupon) setCouponData(coupon);

    } , [coupon])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
        
        if(currentId){
            dispatch(updateCoupon(currentId, couponData));
        }else{
            dispatch(createCoupon(couponData));
        }
        clear();
    }


    const clear = () => {
    
        setCurrentId(null);
        setCouponData({ value: 0,
            user: '',
            expireDate: ''});

    };
    
    

    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
            
            <label htmlFor="">Monto del cupon</label>
            <br/>
            <input type="number" name="value" value={couponData.value} onChange={(e) => setCouponData({ ... couponData, value: e.target.value })}/>
            <br/>
            <label htmlFor="">Asignar cupon al mail</label>
            <br/>
            <input type="text" name="user" value={couponData.user} onChange={(e) => setCouponData({ ... couponData, user: e.target.value })}/>
            <br/>
            <label htmlFor="">Fecha de expiracion</label>
            <br/>
            <input type="text" name="expireDate" value={couponData.expireDate} onChange={(e) => setCouponData({ ... couponData, expireDate: e.target.value })}/>
           
            <button type="submit">Crear</button>

        </form>
        </div>
    )
}

export default CouponForm;