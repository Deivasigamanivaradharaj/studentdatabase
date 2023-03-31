import React, { useContext, useState } from 'react'
import { child, getDatabase, push, ref, set } from "firebase/database";
import app from '../Firebase';
import StudentDBContext from '../Context/StudentDBContext';

function Addstudents() {

    let Context = useContext(StudentDBContext)
    let [student, addStudent] = useState({
        Rollno:'',
        Regno:'',
        Name:'',
        Email:'',
        DomainMail:'',
        Gender:'',
        BloodGroup:'',
        Phno:'',
        Aadhar:'',
        DOB:'',
        Address:''
      });

      const dbRef = ref(getDatabase(app));
      const Blood = ["", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]

    function addStudenttoDB(event){
      if(student.Regno===""||student.Name===""||student.Email===""||student.DomainMail===""||student.Gender===""||student.BloodGroup===""||student.Phno===""||student.Aadhar===""||student.DOB===""||student.Address==="")
      {
        console.log("fill all fields")
      }
      else
      {
          event.preventDefault();
                  writeUserData(student.Rollno, student.Regno, student.Name, student.Email, student.DomainMail, student.Gender, student.BloodGroup, student.Phno, student.Aadhar, student.DOB, student.Address)
                  alert("Data Added")
                  Context.setShowAddStudent(false)
      
      }
    }

    function writeUserData(Rollno, Regno, Name, Email, DomainMail, Gender, BloodGroup, Phno, Aadhar, DOB, Address){
      set(child(dbRef, `StudentDB/`+Rollno),{
        Regno:Regno,
        Name:Name,
        Email:Email,
        DomainMail:DomainMail,
        Gender:Gender,
        BloodGroup:BloodGroup,
        Phno:Phno,
        Aadhar:Aadhar,
        DOB:DOB,
        Address:Address
      });
      Context.fetch()
      console.log(Context.SetStudentdb)
    }

  return (
    <div className='AddStudents'>
        <h2>ADD STUDENT</h2>
        <table>
          <tbody>
            <tr>
              <td><label>User id:</label></td>
              <td>
                <input type={'text'} onChange={(event)=>{addStudent({
              ...student,
              Rollno: event.target.value
            })}}></input>
            </td>
            <td>
                <label>Register No:</label>
              </td>
              <td>
                <input type={'number'} onChange={(event)=>{addStudent({
              ...student,
              Regno: event.target.value
            })}}></input>
              </td>
            </tr>
            <tr>
              <td><label>Name:</label></td>
              <td><input type={'text'} onChange={(event)=>{addStudent({
              ...student,
              Name: event.target.value
            })}}></input></td>
            <td><label>Gender:</label></td>
              <td><select onChange={(event)=>{addStudent({
              ...student,
              Gender: event.target.value
            })}}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
        </select></td>
        <td><label>Date Of Birth:</label></td>
              <td><input type={'date'} onChange={(event)=>{addStudent({
              ...student,
              DOB: event.target.value
            })}}></input></td>
            </tr>
            <tr>
            <td>
                <label>Email:</label>
              </td>
              <td>
              <input type={'text'} onChange={(event)=>{addStudent({
              ...student,
              Email: event.target.value
            })}}></input>
              </td>
              <td><label>Domain Email:</label></td>
              <td><input type={'text'} onChange={(event)=>{addStudent({
              ...student,
              DomainMail: event.target.value
            })}}></input></td>
            <td><label>Phone No:</label>
              </td>
              <td><input type={'number'} onChange={(event)=>{addStudent({
              ...student,
              Phno: event.target.value
            })}}></input></td>
            </tr>
            <tr>
              
              <td><label>Blood Group:</label></td>
              <td>
                <select onChange={(event)=>{
       addStudent({
        ...student,
        BloodGroup: event.target.value
      })}}>
        {Blood.map((Blood,i)=>{
          return <option key={i} value={Blood}>{Blood}</option>
        })}
      </select>
        </td>
        <td><label>Aadhar No:</label></td>
              <td><input type={'number'} onChange={(event)=>{addStudent({
              ...student,
              Aadhar: event.target.value
            })}}></input></td>
            <td><label>Address:</label></td>
              <td><input type={'text'} onChange={(event)=>{addStudent({
              ...student,
              Address: event.target.value
            })}}></input></td>
            </tr>
          </tbody>
        </table>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <button onClick={addStudenttoDB}>Submit</button>
        <button onClick={()=>{
          Context.setShowAddStudent(false)
        }}>Cancel</button>
        </div>
    </div>
  )
}

export default Addstudents
