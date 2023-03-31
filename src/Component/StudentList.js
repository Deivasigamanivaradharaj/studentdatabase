import React, { useContext } from 'react'
import StudentDBContext from '../Context/StudentDBContext';

function StudentList() {
  
  let Context = useContext(StudentDBContext);

    return (
    <div className='StudentList'>
            <table>
              <tbody>
              <tr>
                <th>Register no</th>
                <th>Name</th>
                <th>Batch</th>
                <th>Aadhar No</th>
                <th>Gender</th>
                <th>D.O.B</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Domain Mail Id</th>
                <th>Blood Group</th>
                <th>Address</th>
              </tr>
              {Context.StudentDB(Context.Studentdb).map((Students) => {
                return <tr key={Students.id}>
                <td>{Students.Regno}</td>
                <td>{Students.Name}</td>
                <td>{Students.Batch}</td>
                <td>{Students.Aadhar}</td>
                <td>{Students.Gender}</td>
                <td>{Students.DOB}</td>
                <td>{Students.Phno}</td>
                <td>{Students.Email}</td>
                <td>{Students.DomainMail}</td>
                <td>{Students.BloodGroup}</td>
                <td>{Students.Address}</td>
                </tr>
                })} 
              </tbody>  
            </table>
        </div>
         
  )
}

export default StudentList
