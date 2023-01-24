import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./layouts/SharedLayout";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
