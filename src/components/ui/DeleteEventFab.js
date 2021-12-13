import React from 'react'
import { useDispatch } from 'react-redux'
import { evenDeleted } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( evenDeleted() );
    }

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={handleDelete}
        >
            <i className='fas fa-trash' />
            <span> Borrar Evento</span>
            
        </button>

    )
}
