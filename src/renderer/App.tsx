import Router from "./router";
import { RouterProvider } from "react-router-dom";

const func = async () => {
  const response = await window.api.ping();
  console.log(response); // 打印 'pong'
};

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
