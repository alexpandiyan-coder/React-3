
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css"
// import { useContext } from 'react';
// import { AppContext} from './App';



function List() {

  // const child=useContext(AppContext)
  // console.log(child)

  return (
    <div>

<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
    
  
      {/* {
       child.map((item,index)=>{
          return(<>
          <tr>
          <td>{index}</td>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Address}</td>
          </tr>
          </>)
        })
      } */}


      </tbody>
    </Table>
    </div>
  )
}

export default List
