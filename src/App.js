import './App.css';
import React, { useContext } from 'react'    
import StudentList from './Component/StudentList';
import SearchFilter from './Component/SearchFilter';
import MenuBar from './Component/MenuBar';
import Addstudents from './Component/Addstudents';
import StudentDBContext from './Context/StudentDBContext';

function App() {

  let Context = useContext(StudentDBContext)

  return (
    <div className="App">
      <div className='menubar'>
        <MenuBar></MenuBar>
      </div>
      {!Context.ShowAddStudent && <div className='container'>
        <SearchFilter></SearchFilter>
        <StudentList></StudentList>
      </div>}
      {Context.ShowAddStudent && <Addstudents></Addstudents>}
    </div>
  );
}

export default App;
