import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./layouts/Root";
import { Home, NotFound, Project } from "./pages";
import { ROUTES } from "./routes/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route path={ROUTES.home.path} element={<Home />} />
      <Route path={ROUTES.project.path} element={<Project />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
