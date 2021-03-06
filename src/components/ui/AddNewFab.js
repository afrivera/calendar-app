import React from 'react'
import { useDispatch } from 'react-redux'
import { eventClearActiveEvent } from '../../actions/events'
import { uiOpenModal } from '../../actions/ui'

export const AddNewFab = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        // console.log('click')
        dispatch( eventClearActiveEvent() );
        dispatch(uiOpenModal());
    }
    return (
        <button 
            className='btn btn-primary fab'
            onClick={handleClick}
        >
            <i className='fas fa-plus' />
            
        </button>
    )
}
