import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/PublicRoute/Routes";
import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
