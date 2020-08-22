import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alomgir', 'Salman', 'Sakib', 'Shuvo']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$15.99'},
    {name: 'Premiere El', price: '$249.99'}
  ]
  const friends = [
    {name: 'Arman', age: '25'},
    {name: 'Rizvi', age: '26'},
    {name: 'Abid', age: '28'},
    {name: 'Raju', age: '24'},
    {name: 'Kazi', age: '27'},
    {name: 'Uthsho', age: '26'}
  ] 
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  // const productNames = products.map(product => product.name);
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name +" "+product.price}</li>)
          }
        </ul>
        {/* <Person name = {nayoks[0]} nayika = "Moushumi"></Person>
        <Person name = {nayoks[1]} nayika = "Shabana"></Person>
        <Person name = "Bappa Raz" nayika = "Seka"></Person>
        <Person name = "Elias K" nayika = "Bobita"></Person>   */}
        
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        {/* <Products name = {products[0].name} price = {products[0].price}></Products>
        <Products name = {products[1].name} price = {products[1].price}></Products> */}
        

        {/* ai vabe o pathate pari
        <Products product = {products[1]}></Products> */}

        <Person name = 'Munna' job = 'football'></Person>
        <Person name = 'Mashum' job = 'dorshok'></Person>
        <Person></Person>

        {
          friends.map(frnd => <Friend friend = {frnd}></Friend>)
        }

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount]= useState(0);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      {/* onclick er moddhe "handleIncrease" function tao boshate pari */}
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count -1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productsStyle = {
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return(
    <div style = {productsStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>

      {/* aivabe o dite pari
      <h3>{props.product.name}</h3> */}
    </div>
  )
}

function Person(props){
  return(
    <div style = {{border: '2px solid gold', width: '400px', margin: "10px"}}>
      <h3>My Name : {props.name}</h3>
      <p>My Profession : {props.job}</p>
    </div>
  )
}

function Friend(props){
  const friendsStyle = {
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return(
    <div style = {friendsStyle}>
      <h3>{props.friend.name}</h3>
      <h2>{props.friend.age}</h2>
    </div>
  )
}

// function Person(props){
//   const personStyle ={
//     border: "2px solid red",
//     margin: "10px",
//     padding: "5px"
//   }
//   return( 
//   <div style={personStyle}>
//     <h1>Nayok : {props.name}</h1>
//     <h3>Hero of the {props.nayika}</h3>
//   </div>
//   )
// }

export default App;
