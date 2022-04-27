import Homepage from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/auth/auth.component";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop"> Shop Page</Route>
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
