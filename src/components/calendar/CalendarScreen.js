import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es';//para cambiar el idioma a través de moment
import { eventClearActiveEvent, setActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment)

// const events = [{
//     title: 'Cumpleaños del Jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     user: {
//         _id: '1233',
//         name: 'Andres'
//     }
// }]

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    //TODO: leer los eventos
    const {events, activeEvent} = useSelector(state => state.calendar)
    // console.log(events)

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleclick = (e) => {
        // console.log(e)
        // console.log('abrir modal')
        dispatch( uiOpenModal() );
        
    }

    const onSelectEvent = (e) => {
        // console.log(e)
        dispatch(setActive(e));
        
    }

    const onViewChange = (e)=> {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        // console.log(e)
        dispatch( eventClearActiveEvent() );
    }

    const eventStyleGetter = ( event, start, end, isSelected) => {
        // console.log(event, start, end, isSelected)
        const style = {
            backgroudColor: '#367cf7',
            borderRadios: 'opx',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }

    return (
        <div className='calendar-screen'>
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                // style={{ height: 500 }}
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleclick }
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable= {true}
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />
            {
                (activeEvent) &&
                <DeleteEventFab />
            }
            <CalendarModal />
        </div>
    )
}
