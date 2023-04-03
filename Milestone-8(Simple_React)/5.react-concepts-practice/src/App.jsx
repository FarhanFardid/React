import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Number from './components/Number/Number'

const headStyle ={
  backgroundColor: 'yellow',
  padding:'10px',
  border: '1px solid red'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Article></Article>
      <Blog id='1' heading='Lorem 30' author='John'></Blog>
      <Blog id='2' heading='Lorem 40' author='Alice'></Blog>
      <Blog id='3' heading='Lorem 50' author='Marsh'></Blog>
      <Number></Number>
       <Mobile></Mobile>
       <Externaluser></Externaluser>
      

    
    </div>
  )
}

function Article(){
  return (
    <div>
      <h2 style={headStyle}>Article Blog </h2>
      <article className='blog'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, non? Dolorum placeat perspiciatis optio error sint voluptatibus illo quo fuga doloribus cupiditate. A illo sed beatae repellat inventore fugiat, ullam animi officiis quidem qui? Alias excepturi neque exercitationem debitis obcaecati dicta fugit ipsum porro voluptate autem possimus voluptas, quaerat quae.</article>
      <p style={{backgroundColor:'gray', padding:'5px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit aut quisquam, officiis cum quo asperiores saepe ut repellendus quasi!</p>
    </div>
  )}

  function Blog(props){
    return(
      <div style={{backgroundColor:'brown', padding:'5px', color:'white'}}>
        <h4>Blog #{props.id}</h4>
        <h5>Blog Heading: {props.heading}</h5>
        <h6>Blog Author:{props.author}</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima assumenda nisi id voluptatum blanditiis dicta vel. Quae, laudantium officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, nostrum?</p>
      </div>
    )

  }
  function Mobile(){
    let [bp, setBp] = useState(100);

    const downBattery = () =>{
      if(bp>0){
     const newbp = bp - 10;
      setBp(newbp);}
      else{
        bp= 0;
      }
    }

return(
  <div style={{backgroundColor:'yellowgreen', padding:'8px'}}>
    <h4>Battery Level: {bp}%</h4>
    <button onClick={downBattery}>Battery Down</button>
    <BatteryLevel level={bp}></BatteryLevel>
  </div>
)

function BatteryLevel(props){
  return (
    <h2 style={{border:'2px solid red', backgroundColor:'aqua'}}>Battery Level is:{props.level} </h2>
  )
}

  }

  function Externaluser(){
   const [todos, setTodos] = useState([]);

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then (data => setTodos(data))
   
   },[]);

   return(
    <div style={{backgroundColor:'antiquewhite',padding:'8px'}}>
      
   {
    todos.map(todo => <Todo todo={todo} key={todo.id}></Todo>)
   }
    </div>
   )
  }

  function Todo(props){
   
    return(
      <>
      <h4>Todo Id: {props.todo.id}</h4>
      <h5>Title: {props.todo.title}</h5>
   
      
      </>
    )
  }

export default App
