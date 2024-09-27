
import Table from 'react-bootstrap/Table';

function UserTable({tableData}) {


  return (
    <Table striped bordered hover variant="dark" className='w-50 m-auto'>
        <tr>
        <th>Name</th>
        <th>Password</th>
        </tr>      
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
