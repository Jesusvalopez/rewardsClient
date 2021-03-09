import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { getCoupons } from './actions/coupons'
import Coupons from './components/Coupons/Coupons';
import CouponForm from './components/Coupons/Coupon/CouponForm';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCoupons());
    }, [currentId, dispatch])

    return(
        <div>
            <h1>App</h1>
            <CouponForm currentId={currentId} setCurrentId={setCurrentId}></CouponForm>
            <Coupons setCurrentId={setCurrentId}></Coupons>
        </div>
    )
}

export default App;