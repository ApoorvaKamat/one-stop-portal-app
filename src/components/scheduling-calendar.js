import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function SchedulingCalendar(props) {
const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} onClickDay={props.text(value)} />
    </div>
  );
}