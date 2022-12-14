import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/PublicRoute/Routes";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
