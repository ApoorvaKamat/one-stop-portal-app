import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/task-table.css';
import { tasks } from '../assets/tasks';
export function TaskTable() {
  let url = 'https://jira.atlassian.com/';
  let helpURL = '/portal/projectHelp'
  
  return (
    <>
      <div id='tableHeader'className="d-flex bd-highlight bg-dark text-white">
        <div className="flex-fill bd-highlight border border-dark w-sm-8rem">Tasks</div>
        <div className="flex-fill bd-highlight border border-dark w-sm-1rem">Due</div>
        <div className="flex-fill bd-highlight border border-dark w-sm-3rem">Status</div>
        <div className="flex-fill bd-highlight border border-dark w-sm-3rem">Help</div>
      </div>
      {
        tasks.map(task => (
          <div key={task.id} className="d-flex bd-highlight px-0 tableBody">
              <div className="flex-fill bd-highlight border-bottom border-dark w-sm-8rem text-start px-1">
                <a href={url} target='_blank' rel="noreferrer" className='text-decoration-none'>
                  <span className="d-inline-block text-truncate" style={{ maxWidth: '100%'}}>
                     {task.tName}
                  </span> 
                </a>
              </div>
              <div className="flex-fill bd-highlight border-bottom border-start border-end border-dark w-sm-1rem text-start px-2">{task.dueDate}</div>
              <div className="flex-fill bd-highlight border-bottom border-dark w-sm-3rem text-start px-1">
                  <span className="d-inline-block text-truncate" style={{ maxWidth: '100%'}}>
                     {task.progress}
                  </span> 
              </div>
              <div className="flex-fill bd-highlight border-bottom border-dark w-sm-8rem text-start px-1">
                <a href={helpURL} target='_blank' rel="noreferrer" className='text-decoration-none'>
                  <span className="d-inline-block text-truncate" style={{ maxWidth: '100%'}}>
                     {task.help}
                  </span> 
                </a>
              </div>
          </div>
        ))
      }
    </>
  );
}