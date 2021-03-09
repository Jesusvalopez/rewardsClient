import React from 'react';
import moment from 'moment';

import { useDispatch } from 'react-redux';
import { deleteCoupon } from '../../../actions/coupons';

const Coupon = ({coupon, setCurrentId}) => {

    const dispatch = useDispatch();

    return(
        <>

            <p>Usuario: {coupon.user} </p>
            <p>Valor del cupon: {coupon.value}</p>
            <p>Fecha de expiración: {moment(coupon.expireDate).fromNow()}</p>
            <button onClick={() => {setCurrentId(coupon._id)}}>Editar</button>
            <button onClick={() => {dispatch(deleteCoupon(coupon._id))}}>Eliminar</button>
            <hr/>

        </>
    )

}

export default Coupon;