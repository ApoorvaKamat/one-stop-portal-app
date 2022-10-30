import Table from 'react-bootstrap/Table';

export function TaskTable() {
  return (
    <Table responsive striped bordered hover>
      <thead className='bg-dark position-sticky'>
        <tr>
          <th className='text-white'>Tasks</th>
          <th className='text-white'>Due</th>
          <th className='text-white'>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Check with Yash on DP5 Updates</td>
            <td>Nov 3</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>Check with Anusri on DP5 Help</td>
            <td>Nov 14</td>
            <td>Yet to start</td>
        </tr>
        <tr>
            <td>Check with Apoorva on DP5 Navigation</td>
            <td>Nov 17</td>
            <td>Pending Approvals</td>
        </tr>
        <tr>
            <td>Team Meeting</td>
            <td>N/A</td>
            <td>Scheduled</td>
        </tr>
        <tr>
            <td>Work on website</td>
            <td>Nov 3</td>
            <td>In Progress</td>
        </tr>
      </tbody>
    </Table>
  );
}