import { useState } from "react"
const count = 100
function getName() {
  return 'jack'
}

const list = [
  {id: 1001, name: "Vue"},
  {id: 1002, name: "React"},
  {id: 1003, name: "Angular"},
]

const login = false

function App() {
  const [count, setCount] = useState(0)
  const clickHandler = (e) => {
    setCount(count+1)
    console.log("button 被按下", e);
  }

  const [form, setFrom] = useState({name: 'jack'})
  const clickHandler2 = () => {
    setFrom({
      ...form, 
      name: 'aaa'
    })
  }

  return (
    <div className="App">
      <button onClick={clickHandler}>{count}</button>
      <button onClick={clickHandler2}>{form.name}</button>
    </div>
  );
}

export default App;
