import React, { useState, useContext, useEffect } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { ScheduleMeeting } from "react-schedule-meeting";
import { Context } from "../store.js";

export function MeetingScheduler(props) {
  const [state, dispatch] = useContext(Context);

  // this generates basic available timeslots for the next 6 days
  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      ),
    };
  });
  const [meetDate, setDate] = useState("");
  const [isMeetingSelected, setIsMeetingSelected] = useState(
    state.isMeetingScheduled[props.name].isSet
  );
  const allSchedules = state.isMeetingScheduled;

  console.log("====ALL SCHEDULES====", allSchedules[props.name]);

  return (
    <div className="d-flex flex-column">
      {isMeetingSelected ? (
        <>
          <div className="p-4">
            Meeting scheduled at{" "}
            {state.isMeetingScheduled[props.name].meetingDate.toString()}
          </div>
          <div className="d-flex flex-row justify-content-center">
          <Button 
          className="m-3"
            variant={"primary"}
            onClick={() => setIsMeetingSelected(false)}
          >
            Reschedule
          </Button>
          <Button
          className="m-3"
            variant={"danger"}
            onClick={() => {
              allSchedules[props.name].isSet = false;
              allSchedules[props.name].meetingDate = '';
              dispatch({ type: "set_meeting_schedule", payload: allSchedules });
              setIsMeetingSelected(false);
            }}
          >
            Cancel Meeting
          </Button>
          </div>
        </>
      ) : (
        <>
          <ScheduleMeeting
            borderRadius={10}
            primaryColor="#3f5b85"
            eventDurationInMinutes={30}
            availableTimeslots={availableTimeslots}
            onStartTimeSelect={(e) => setDate(e.startTime)}
            onSelectedDayChange={() => setDate("")}
          />

          <Button
            variant={!meetDate ? "secondary" : "primary"}
            disabled={!meetDate}
            onClick={() => {
              console.log(
                "===date==",
                meetDate,
                state.isMeetingScheduled[props.name]
              );
              allSchedules[props.name].isSet = true;
              allSchedules[props.name].meetingDate = meetDate.toString();
              dispatch({ type: "set_meeting_schedule", payload: allSchedules });
              console.log("===date==", meetDate, state.isMeetingScheduled);
              setIsMeetingSelected(true);
            }}
          >
            Submit
          </Button>
        </>
      )}
    </div>
  );
}
