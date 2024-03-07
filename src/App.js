
function Son(props) {
  console.log(props);
  return <div>this is son</div>
}

function App() {
  const name = 1
  return (
    <div className="App">
      <Son name={name} />
    </div>
  );
}

export default App;
