import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { useEffect, useState } from 'react';

const head={
  color:'red',
  padding:'10px',
  backgroundColor:'gold',
  border:'2px solid red',
  borderRadius: '5px'

}

function App() {
  const [count, setCount] = useState(0)

  
    return (
  
      <div className="App">
        <h2 style={head}>Famous Cricketers of Bangladesh</h2>
       {
        cricketers.map (cricketer =><Cricketer name={cricketer}></Cricketer>)
       }
        <h2 style={head}>Famous Actors of Bangladesh</h2>
       {
        actors.map(actor => <Actor name={actor}> </Actor>)
       }
            <h2 style={head}>Some Products with price</h2>
  {
    products.map(product => <Product product={product}></Product>)
  }
  <h2 style={head}>Button with State Practice</h2>
  <Button>
  </Button>
  <h2 style={head}>External data Load </h2>
  <ExternalUsers></ExternalUsers>
      </div>
    );
  }



  
  
  // 1. directly send data and show in the components
  // function App() {
  //   return (
  //     <div className="App">
  //       <h2 style={head}>Famous Celebrities of Bangladesh</h2>
  //       <Cricketer name='Shakib Al Hasan' proff='Cricketer' country='Bangladesh' role='All-rounder' ranking='No. 1'></Cricketer>
  //       <Actor name='Afran Nisho' proff='Actor' country='Bangladesh' role='Protagonist' rating='*****'></Actor>
  //       <Cricketer name='Tamim Iqbal' proff='Cricketer' country='Bangladesh' role='Opener Batsman' ranking='No. 5'></Cricketer>
  //       <Actor name='Tahsan Khan' proff='Actor, Singer, Teacher & Music Composer' country='Bangladesh' role='Protagonist and Singer' rating='*****'></Actor>
      
  
  //     </div>
  //   );
  // }
  // 2. SHow data in the components from the array
  
  const cricketers =['1. Tamim Iqbal','2. Litton Das','3. Nazmul Shanto', '4. Shakib Al Hasan','5. Tawhid Hridoy','6. Mushfiqur Rahim', '7. Mahmudullah Riyad', '8. Mehidy Miraz', '9. Afif Hossain', '10. Taskin Ahmed', '11. Mustafizur Rahman','12. Hasan Mahmud','13. Ebadot Hossain'];
  const actors=['1. Afran Nisho','2. Tahsan Khan','3. Tawsif Mahbub'];
  const products=[
    {name:'Laptop', price: 75000},
    {name:'Mobile', price: 55000},
    {name:'Watch', price: 7000},
    {name:'Tablet', price: 50000},
  
  ]
 
  
  // function Cricketer(props){
  //   return (
  //     <div style={{color:'red',padding:'5px',backgroundColor:'aqua',margin:'10px', borderRadius:'5px'}}>
  //       <h2>Name: {props.name}</h2>
  //       <p style={{color:'green'}}>Profession:{props.proff} </p>
  //       <p style={{fontWeight:'bolder'}}>Country:{props.country}</p>
  //       <p style={{color:'green'}}>Role: {props.role}</p>
  //       <p>Ranking:{props.ranking}</p>
  //   </div>
  //   );
  
  //   }
  // 2. show from cricketers array 
  function Cricketer(props){
    return (
      <div style={{color:'red',padding:'5px',backgroundColor:'aqua',margin:'10px', borderRadius:'5px',fontSize:'800'}}>
        <h2> {props.name}</h2>
       
    </div>
    );
  
    }
  
    function Product(props){
      return(
        <div style={{color:'blue', backgroundColor:'Gray',padding:'10px',margin:'8px', borderRadius: '8px'}}>
          <h2>Product Name: {props.product.name}</h2>
          <p style={{color:'white',fontWeight:'bold'}}>Price: {props.product.price}</p>
        </div>
      )
    }
  function Button(){
   
       const [count, setCount] = useState(0)
      const addCount =()=> {
       const  newCount = count + 1;
        setCount(newCount);
      }
      const rmvCount =()=> {
        const  newCount = count - 1;
         setCount(newCount);
       }
      return (
      <div style={{backgroundColor:'antiquewhite', padding:'10px',margin:'7px'}}>
        <h1>Counter: {count}</h1>
        <button onClick={addCount}>Increase Counter</button>
        <button onClick={rmvCount}>Decrease Counter</button>
      </div>
    )
  }
  
  function ExternalUsers(){
    const [users,setUsers] =useState([]);
  
     useEffect(() =>{
           fetch('https://jsonplaceholder.typicode.com/users')
           .then (res => res.json())
           .then (data => setUsers(data))
     },[]);
  
     return (
      <div>
        <h2>External Users:</h2>
        {
          users.map(user => <User name={user.name} key={user.id}></User>)
        }
      </div>
     )
  }
  function User(props){
    return(
      <div>
         <h4>Name: {props.name}</h4>
      </div>
    )
  }
    // function Actor(props){
    //   return(
      
    //        <div style={{color:'white',padding:'5px',backgroundColor:'violet',margin:'10px', borderRadius:'5px'}}>
    //     <h2 >Name: {props.name}</h2>
    //     <p style={{color:'red'}}>Profession:{props.proff} </p>
    //     <p style={{fontWeight:'bolder'}}>Country: {props.country}</p>
    //     <p style={{color:'red'}}>Role: {props.role} </p>
    //     <p>Ratings: {props.rating} </p>
  
    //     </div>
    //   );
    //   }
      // 2. show from actors array
      function Actor(props){
        return(
        
             <div style={{color:'white',padding:'5px',backgroundColor:'violet',margin:'10px', borderRadius:'5px'}}>
          <h2 >{props.name}</h2>
        
    
          </div>
        );
        }
      
    
  
  
  
 
  

export default App;
