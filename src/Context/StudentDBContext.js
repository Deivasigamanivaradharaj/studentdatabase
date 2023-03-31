import React, { createContext, useEffect, useState } from 'react'
import { getDatabase, ref, child, get} from "firebase/database";
import app from '../Firebase';

let StudentDBContext = createContext({Studentdb:[], StudentDB:[], ShowAddStudent:false, Search:"", SetStudentdb:undefined, SetStudentDB:undefined, SetSearch:undefined, fetch:undefined, setShowAddStudent:undefined})

export function StudentDBContextProvider(props) {
  
  let[Studentdb,setStudentdb] = useState([]);
  let[Search,setSearch] = useState([]);
  let[ShowAddStudent,setShowAddStudent] = useState(false)

  const dbRef = ref(getDatabase(app));

  useEffect(()=>{
    fetch();
  })

  function fetch(){
    get(child(dbRef, `StudentDB`)).then((snapshot) => {
      if (snapshot.exists()) {
          let StudentList = [];
          for(let key in snapshot.val())
      {
          StudentList.push({...snapshot.val()[key], id:key}) 
      }
      setStudentdb(StudentList)
      console.log(Studentdb)
      } else {
          console.log("No data available");
      }
      }).catch((error) => {
       console.error(error);
   },[fetch]);
  }

  function SetSearch(Search){
    setSearch(Search)
    console.log(Search)
  }

  const StudentDB = (data) => {
    return data.filter( (item) => 
    item.Name.toLowerCase().includes(Search) ||
    item.Regno.toString().includes(Search) ||
    item.id.toString().toLowerCase().includes(Search) ||
    item.DOB.toString().includes(Search) ||
    item.Phno.toString().includes(Search) ||
    item.Aadhar.toString().includes(Search) ||
    item.Gender.toLowerCase()===(Search) ||
    item.BloodGroup.toLowerCase()===(Search));

  }

  return (
    <StudentDBContext.Provider value={{Studentdb:Studentdb, StudentDB:StudentDB, Search:Search, ShowAddStudent:ShowAddStudent, SetSearch:SetSearch, fetch:fetch, setShowAddStudent:setShowAddStudent}}>
        {props.children}
    </StudentDBContext.Provider>
  )
}

export default StudentDBContext
