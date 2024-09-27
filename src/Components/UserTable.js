
import Table from 'react-bootstrap/Table';

function UserTable({tableData}) {

<<<<<<< HEAD

=======
>>>>>>> a39c010a7ff5f83dee2c461cb7d1ac7d7f687ea7
  return (
    <Table striped bordered hover variant="dark" className='w-50 m-auto'>
        <tr>
<<<<<<< HEAD
        <th>Name</th>
        <th>Password</th>
        </tr>      
=======
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
>>>>>>> a39c010a7ff5f83dee2c461cb7d1ac7d7f687ea7

  )
}

export default UserTable
