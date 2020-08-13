import React from 'react';

import './App.css';


function App() {
  let [data,setData] = React.useState("")
  let dataToSend = (e)=>{
    let val = e.target.value;
    setData(val)

  }
  let postData = (e)=>{
    e.preventDefault()
     fetch("", {
    method: 'post',
    body: JSON.stringify({data:data})
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    alert(data)
  });
  }

  return (
    <div className="App">
      <form action ="" method="POST">
      <input  onChange = {dataToSend}type="text"></input>
      <input type="submit" onClick = {postData}></input>

      </form>
    </div>
  );
}

export default App;
