import { Col, Container, Row } from 'react-bootstrap';
import '../style/task-table.css';
import { tasks } from '../assets/tasks';
export function TaskTable() {
  
  return (
    <>
    <Container className='w-100'>
      <Row id='tableHeader'>
          <Col sm={6} className="border border-dark text-white bg-dark">Tasks</Col>
          <Col sm={2} className="border border-dark text-white bg-dark">Due</Col>
          <Col sm={4} className="border border-dark text-white bg-dark">Status</Col>
      </Row>
      {
        tasks.map(task => (
          <Row key={task.id}>
              <Col sm={6} className="border border-dark tableText">{task.tName}</Col>
              <Col sm={2} className="border border-dark tableText">{task.dueDate}</Col>
              <Col sm={4} className="border border-dark tableText">{task.progress}</Col>
          </Row>
        ))
      }
    </Container>
    </>
  );
}