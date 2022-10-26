import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/PublicRoute/Routes";
import "./App.css";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
