import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addToDB, deleteTeam, rmvFromDB } from './utilities/Database'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <User></User>
     
    </div>
  )
}

function User(){
  const [users, setUsers] =useState([]);
  useEffect(()=>{
    fetch('JSON.data')
    .then(res=> res.json())
    .then(data => setUsers(data) )
  },[]);

  return(
    <div>
      {
users.map(user => <UserDetails user={user} key={user._id}></UserDetails>)
      }
      <button style={{backgroundColor:'red',padding:'5px',margin:'2px',color:'white'}}onClick={()=>deleteTeam()}>Delete Team</button>
    </div>
  )

 }

 function UserDetails(props){
 
  const addToTeam= (id,name) =>{
    addToDB(id,name);
    
  }
  const rmvFromTeam= (id) =>{
    rmvFromDB(id);
    console.log( id ," is removed from team");
  }

  const{name,_id,gender,email,phone} = props.user;
return(
  <div style={{backgroundColor:'gray', padding:'20px', margin:'10px', color:'white',border:'2px solid black', borderRadius:'5px'}}>
 
    <h3>Name: {name}</h3>
    <h5>ID: {_id}</h5>
    <h4>Gender: {gender}</h4>
    <h5>Email: {email}</h5>
    <h6>Phone: {phone}</h6>
    <button style={{backgroundColor:'aqua',padding:'5px',margin:'2px'}}onClick={()=>addToTeam(_id,name)}>Add To Team</button>
    <button style={{backgroundColor:'orange',padding:'5px',margin:'2px'}}onClick={()=>rmvFromTeam(_id)}>Remove From Team</button>
  </div>
)

 }

export default App
