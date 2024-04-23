import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Editor from "./components/Editor";
import Home from "./components/Home";
import Lounge from "./components/Lounge";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import { Routes, Route } from "react-router-dom";

const Roles = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[Roles.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[Roles.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[Roles.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[Roles.Editor, Roles.Admin]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
