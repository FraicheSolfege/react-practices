import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



// // PRACTICE 1 
// function HelloWorld() {
//   return <h1 className="greetings">Hello, World!</h1>;
// }

// function BackgroundDiv(){
//   return <div className="backgroundDiv">
//     <HelloWorld />
//   </div>;
// } 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BackgroundDiv />
//   </React.StrictMode>
// );

// ==============####==================


// // PRACTICE 2 
// function MyClick(){
//   return <button className="theButton" onClick={() => alert("OH FUCK OH GOD")} >
//         Show alert
//    </button>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <MyClick /> 
//   </React.StrictMode>
// );

// ==============####==================


// // PRACTICE 3
// function Button(myProps) {
//   return (
//     <button className="custom-button" onClick={myProps.onClick}>
//       {myProps.children}
//     </button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Button onClick={() => alert("Button 1 clicked")}>Button 1</Button>
//     <Button onClick={() => alert("Button 2 clicked")}>Button 2</Button>
//     <Button onClick={() => alert("Button 3 clicked")}>Button 3</Button>
//   </React.StrictMode>
// );

//  ==============####==================
// LOGANS SOLUTION(?)
// function MyButton({children, onClick}){
//   return (
//     <button onClick={() => {
//       alert(children)
//     }}>{children}</button>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <MyButton>Click Me </MyButton>
//   </React.StrictMode>
// );

// ==============####==================


// PRACTICE 4
// function States() {
//   // Declare a new state variable, which we'll call "count"  
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <States /> 
//   </React.StrictMode>
// );

// ==============####==================


// // PRACTICE 5
// const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
// function List(){
//   return (
//     <ul>
//       {animals.map((animal, index) => (
//         <li key={index}>{animal}</li>
//       ))}
//     </ul>
//   )
// };

// SECONDARY SOLUTION
// const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
// function List(){
//   const listItems = animals.map(animal => 
//   <li key={animal}>{animal}</li>);
//   return <ul>{listItems}</ul>
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <List /> 
//   </React.StrictMode>
// );

// ==============####==================
// PRACTICE 6
// function ListItem({ value }) {
//   return <span>{value}</span>;
// }
// function Animals({ animal }) {
//   return (
//     <h1>
//       <ListItem value={animal}></ListItem> 
      
//     </h1>
//   );
// }

// function App() {
//   const arr = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
//   const [currentAnimal, setCurrentAnimal] = useState(arr[0]);

//   const changeAnimal = () => {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     setCurrentAnimal(arr[randomIndex]);
//   };

//   return (
//     <div className="App">
//       <Animals animal={currentAnimal}></Animals>
//       <button onClick={changeAnimal}>Change Animal!</button>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// ==============####==================
// PRACTICE 7  https://www.youtube.com/watch?v=IkMND33x0qQ
const Create = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <div>
      <h1>Gimmie dat name</h1>
      <form>
        <input type="text" placeholder ="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value) }/>
        {/* <input type="text" placeholder="First Name" /> */}
        {/* <input type="text" placeholder="Last Name" /> */}
        <input type="text" placeholder ="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value) }/>
        <button type="submit" onClick={() => alert(`wuzzup, ${firstName} ${lastName}.`)}>Submit</button>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Create /> 
  </React.StrictMode>
);



// ==============####==================
// PRACTICE 8
// const jokes = [ { id: 1, setup: "What's the best thing about a Boolean?", punchline: "Even if you're wrong, you're only off by a bit" },
//  { id: 2, setup: "Why do programmers wear glasses?", punchline: "Because they need to C#" } ]

// function Jokes(){
//   return (
//     <div>
//       <h1>JOKES</h1>
//       {jokes.map(joke => (
//         // <joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
//         <li key={joke.id}>{joke.setup} {joke.punchline}</li>
//       ))}
//     </div>
    
// )

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Jokes /> 
//   </React.StrictMode>
// );

// ==============####==================
// PRACTICE 9         ||Joshua's solution||
// function IndividualCard({user}) {
//   return (
//   <div className='flip-card'>
//         <div className='flip-card-inner'>
//           <div className='flip-card-front'>
//             <img src={user.avatar} alt="" />
//           </div>
//           <div className='flip-card-back'>
//             <p className='name'>{user.first_name} {user.last_name}</p>
//             <p className='job'>{user.employment.title}</p>
//             <p className='gender'>{user.gender}</p>
//             <p className='dob'>{user.date_of_birth}</p>
//             <p className='email'>{user.email}</p>
//             <p className='phone'>{user.phone_number}</p>
//           </div>
//         </div>
//       </div>
//   )
// }

// function Cards() {
//   let [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://random-data-api.com/api/users/random_user?size=10')
//       .then(response => response.json())
//         .then(data => setUsers(data));
//   });


//   return (
//   <div className='app'>
//     <div className='card-container'>
//     {users.map(user => 
//     <IndividualCard user={user}/>  
//     )}</div>
//     <button onClick={() => fetch('https://random-data-api.com/api/users/random_user?size=10').then(response => response.json()).then(data => setUsers(data))}>New Batch</button>
//   </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Cards /> 
//   </React.StrictMode>
// );
// ==============####==================
//                      SECOND SOLUTION 
// function MyButton({setMyUsers, setMyCount, count}){
//   return (
//     <button className = 'button1' onClick={()=> {
//           setMyCount(count + 1);
//           fetch('https://random-data-api.com/api/users/random_user?size=10')
//               .then(response => response.json())
//               .then(data => setMyUsers(data))
//     }}>Click Me</button>
//   )
// }

// export default function FetchingAndRendering(){
//   const [users, setUsers] = useState([]);
//   const [count, setCount] = useState(1);
//   useEffect(() => {
//       fetch('https://random-data-api.com/api/users/random_user?size=10')
//           .then(response => response.json())
//           .then(data => setUsers(data))
//   }, []);  
  
//   return (
//       <div>
//           <MyButton setMyUsers={setUsers} setMyCount = {setCount} count = {count}/>
//           <p className = 'p1'>Times Rendered: {count}</p>
//           {users.map(user => 
//               <div className='flip-card'>
//                   <div className='flip-card-inner'>
//                       <div className='flip-card-front'>
//                           <img src = {user.avatar} />
//                       </div>
//                       <div className='flip-card-back'>
//                           <h1>{user.first_name} {user.last_name}</h1>
//                           <h3>{user.date_of_birth}</h3>
//                           <h3>{user.social_insurance_number}</h3>
//                           <p>{user.phone_number}</p>
//                           <p>{user.email}</p>
//                       </div>
//                   </div>
//               </div>)}
//       </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <FetchingAndRendering /> 
//   </React.StrictMode>
// );
