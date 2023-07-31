import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { card } = useSelector(state => state.detailPageReducer);
    console.log(card , "card detail")
    useEffect(() => {
        dispatch({ type: 'SERVICE_DETAIL_PAGE', id })
      }, [id])
    return (
        <div>
            <h1>Service Detail</h1>
            <img src={`/image/${card.Pic}`} alt="" />
        </div>
    )
}

export default ServiceDetail
