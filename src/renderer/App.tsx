const func = async () => {
  const response = await window.api.ping();
  console.log(response); // 打印 'pong'
};

function App() {
  return (
    <div>
      <h1>Hello, Electron!!!</h1>
      <button onClick={func}>test</button>
      <p>{window.versions.chrome()}</p>
    </div>
  );
}

export default App;
