import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import Header from '../Header';
import MyEvents from './CalendarEvents';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    render() {
        return (
            <div>
                <Header>
                    <section>
                        <div className="calendar">
                            <BigCalendar
                                events={MyEvents}
                                step={60}
                                showMultiDayTimes
                                defaultDate={new Date(2018, 2, 1)}
                            />
                        </div>
                    </section>
                </Header>
            </div>
        );
    }
}

export default Calendar;