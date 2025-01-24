import './index.scss'
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Advertisements, Announcement, NotFound, Orders } from './pages/index.ts';

const root = document.getElementById("root");

ReactDOM.createRoot(root ? root : document.body).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="advertisements">
        <Route index element={<Advertisements />} />
        <Route path=":id" element={<Announcement />} />
      </Route>

      <Route path="orders" element={<Orders />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);