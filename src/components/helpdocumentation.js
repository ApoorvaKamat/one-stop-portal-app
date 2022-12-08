import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function HelpDoc() {
  return (
    <>
         <h1><u>Documentation</u></h1><br></br>
         <div>
            <div>
                <h4>Task 1: Check daily tasks</h4>
                <p>Go to <a href="http://localhost:3000"> Local Computer Application</a> or <a href="https://one-stop-portal-app.vercel.app/"> Web Application</a>. You can see all your tasks on the landing page once you login with correct credentials.<br></br>
    You can even drag them once you have done the changes and it will automatically sync with JIRA.</p>
                <img src="/screenshots/tasks.png" width="700" height="400"></img>
            </div>
            <br></br>
            <br></br>
            <div>
                <h4>Task 2: Check the discussions for a particular topic you are stuck on</h4>
                <p>Go to <a href="http://localhost:3000/portal/projectHelp"> Local Computer Application</a> or <a href="https://one-stop-portal-app.vercel.app/portal/projectHelp"> Web Application</a>. You can search for your query and also filter on them using search and filters.<br></br>
    Please go through the discussions that other users have already posted about the topic.</p>
                <img src="/screenshots/readdiscussions.png" width="700" height="400"></img>
            </div>
            <br></br>
            <br></br>
            <div>
                <h4>Task 3: Scheduling meeting with an expert</h4>
                <p>Go to <a href="http://localhost:3000/portal/projectHelp"> Local Computer Application</a> or <a href="https://one-stop-portal-app.vercel.app/portal/projectHelp"> Web Application</a>. Chat with any expert you find suitable and schedule a meeting.</p>
                <img src="/screenshots/meetingscheduled.png" width="700" height="400"></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h4>End Notes</h4>
                <p>This is demo project for representation purposes only.<br></br>
    Please enjoy the application!<br></br>
    Made with &hearts; by Team Graphica</p>
            </div>
         </div>
    </>
  );
}