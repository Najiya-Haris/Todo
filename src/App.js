
import './App.css';
import { useState } from "react";

function App() {
  const[toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  const handleToDo = ()=>{
    if(toDo.trim() === "" || toDos.some((item)=>item.text === toDo.trim())){
      return;
    }
    setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])
    setToDo('')
  }
  return (
    <div className="App">
       <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={handleToDo}className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj)=>{
        return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj);
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }}value={obj.status} type="checkbox" name="" id="" />
            <p className={obj.status ? 'text-mark' : ''}>{obj.text}</p>
            <h1>Active Task</h1>
          </div>
          <div className="right">
            <i onClick={()=>setToDos(toDos.filter((newObj)=>newObj.id !== obj.id))} className="fas fa-times"></i>
          </div>
       
        </div>)
 } )}
 {toDos.map((obj)=>{
  if(obj.status){
    console.log(obj.status);
    return(<h2>{obj.text}</h2>)
  }
return null
 })}
      </div>
    </div>


    
    </div>
  );
}

export default App;
