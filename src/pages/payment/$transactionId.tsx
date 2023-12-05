
import React from 'react'
import { useParams } from 'react-router-dom'

const $transactionId = () => {
    const {transactionid} = useParams();
    return (
        <div>$transactionId</div>
    )
}

export default $transactionId