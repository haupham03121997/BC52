// import { FunctionComponent } from './DemoComponent/FunctionComponent'
// import ClassComponent from './DemoComponent/ClassComponent'
import { BTCar } from "./BTCar/BTCar";
import { BTComponent } from "./BTComponent/BTComponent";
import { BTForm } from "./BTForm/BTForm";
import { BTMovie } from "./BTMovie/BTMovie";
import { BTMovieBooking } from "./BTMovieBooking/BTMovieBooking";
import { BTPhone } from "./BTPhone/BTPhone";
import { BTShoeShop } from "./BTShoeShop/BTShoeShop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Databinding } from "./databinding/Databinding";
import { DemoRedux } from "./DemoRedux/DemoRedux";
import { DemoState } from "./DemoState/DemoState";
import { DemoUseEffect } from "./DemoUseEffect/DemoUseEffect";
import { HandleEvent } from "./HandleEvent/HandleEvent";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { DemoProps } from "./Props/DemoProps";
import ReduxThunk from "./ReduxThunk/ReduxThunk";
import { RenderWithCondition } from "./RenderWithCondition/RenderWithCondition";
import { RenderWithMap } from "./RenderWithMap/RenderWithMap";
import { StyleComponent } from "./StyleComponent/StyleComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import MainLayout from "./layouts/AdminLayout";
import AnimalDetails from "./pages/AnimalDetails";
import DemoTailwincss from "./pages/DemoTailwindcss/DemoTailwincss";
import DemoRef from "./pages/DemoRef";
import CustomHooks from "./pages/CustomHooks";

// JSX => Javascript XML => cú pháp hỗ trợ viết thẻ html ở trong javascript
// attribute => viết theo quy tắc camelCase

// 2 loại component:
// class Component (statefull component) (Hiện tại ko sử dụng) - react life cycle

// function component (stateless component)

// 1 component chỉ đc phép return về duy nhất 1 thẻ jsx

// component lớn nhất trong dự án
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="admin/dashboard" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} /> */}

        {/* Nested Router */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="animals" element={<ReduxThunk />} />
          <Route path="demo-tailwind" element={<DemoTailwincss />} />
          <Route path="demo-ref" element={<DemoRef />} />
          <Route path="demo-custom-hooks" element={<CustomHooks />} />
          {/* Dynamic segments */}
          {/* animals/1 , animals/2 , animals/3 */}
          <Route path="animals/:id" element={<AnimalDetails />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

// npm i redux react-redux

// npm create vite@latest
