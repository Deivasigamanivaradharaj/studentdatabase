import React, { useContext, useState } from 'react'    
import StudentDBContext from '../Context/StudentDBContext';


function SearchFilter() {

  let Context = useContext(StudentDBContext);
  let [Filter,setFilter] = useState("Select a Filter")

  // const Filters = ["Select Filter", "Gender", "Blood Group"];
  const Blood = ["", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
  const genders = ["", "Male", "Female", "Others"];
  
  return (
    <div className='Searchfilter'>
      <input type={'text'} placeholder='Search...' onChange={(event)=>{
        Context.SetSearch(event.target.value.toLowerCase())}} ></input>
      <button>Search</button>
      <div className='filters'>
      {/* <select onChange={(event)=>{
        setFilter(event.target.value)}}>
        {Filters.map((filter,i)=>{
          return <option key={i} value={filter}>{filter}</option>
        })}
      </select> */}
      {<button onClick={() => {
        Context.setShowAddStudent(true)
      }
      } style={{background:'green'}}>+</button>}
      <select value={Filter} onChange={(event)=>{
        setFilter(event.target.value)}}>
        <option value={"Select a Filter"}>Select a Filter</option>
        <option value={"Gender"}>Gender</option>
        <option value={"Blood Group"}>Blood Group</option>
      </select>
      {Filter==="Gender" && <select onChange={(event)=>{
        Context.SetSearch(event.target.value.toLowerCase())}}>
        {genders.map((gender,i)=>{
          return <option key={i} value={gender}>{gender}</option>
        })}
      </select>}
      {Filter==="Blood Group" && <select onChange={(event)=>{
        Context.SetSearch(event.target.value.toLowerCase())}}>
        {Blood.map((Blood,i)=>{
          return <option key={i} value={Blood}>{Blood}</option>
        })}
      </select>}
      {Filter!=="Select a Filter" && <button onClick={() => {
        Context.SetSearch("")
        setFilter("Select a Filter")
      }
      } style={{background:'red'}}>X</button>}
      </div>
    </div>
  )
}

export default SearchFilter
