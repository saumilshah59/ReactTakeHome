import { Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import OrderTable from './TableContent'

function NoDataComponent() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap:'10px', alignItems: 'center', marginTop: '150px' }}>
            <Typography variant='h3'>What are you looking for?</Typography>
            <Typography variant='h4'>Start search by entering query or setting filter</Typography>
        </div>
    )
}

function Content() {
    const orders = useSelector(state => state.data)
    if(orders.length > 0) {
        return <OrderTable data={orders}></OrderTable>
    } else {
        return <NoDataComponent></NoDataComponent>
    }
}

export default Content
