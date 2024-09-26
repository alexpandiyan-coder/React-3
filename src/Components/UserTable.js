
import Table from 'react-bootstrap/Table';

function UserTable({tableData}) {

  return (
    <Table striped bordered hover variant="dark" className='w-50 m-auto'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
       {
    tableData.map((item)=>{
      return(<>
      <tr>
        <td>{item.Name}</td>
        <td>{item.password}</td>
      </tr>
      
      </>)
    })
   }
      </tbody>
    </Table>

  )
}

export default UserTable
