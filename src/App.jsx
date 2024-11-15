import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import GlobalStyles from "./styles/GlobalStyles";
//import { HiTrash } from "react-icons/hi";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import About from "./ui/About";
import Projects from "./ui/Projects";
import { DarkModeProvider } from "./context/DarkModeContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

export default function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}
