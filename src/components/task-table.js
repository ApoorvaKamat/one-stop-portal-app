import { Col, Container, Row } from 'react-bootstrap';
import '../style/task-table.css';
import { tasks } from '../assets/tasks';
export function TaskTable() {
  
  return (
    <>
      <div id='tableHeader'class="d-flex bd-highlight bg-dark text-white">
        <div class="flex-fill bd-highlight border border-dark w-sm-4rem">Tasks</div>
        <div class="flex-fill bd-highlight border border-dark w-sm-4rem">Due</div>
        <div class="flex-fill bd-highlight border border-dark w-sm-4rem">Status</div>
      </div>
      {
        tasks.map(task => (
          <div key={task.id} className="d-flex bd-highlight px-0 tableBody">
              <div className="flex-fill bd-highlight border-bottom border-dark w-sm-4rem">{task.tName}</div>
              <div className="flex-fill bd-highlight border-bottom border-start border-end border-dark w-sm-4rem">{task.dueDate}</div>
              <div className="flex-fill bd-highlight border-bottom border-dark w-sm-4rem">{task.progress}</div>
          </div>
        ))
      }
    </>
  );
}