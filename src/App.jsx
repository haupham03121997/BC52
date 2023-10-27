// import { FunctionComponent } from './DemoComponent/FunctionComponent'
// import ClassComponent from './DemoComponent/ClassComponent'
import { BTCar } from "./BTCar/BTCar";
import { BTComponent } from "./BTComponent/BTComponent";
import { BTForm } from "./BTForm/BTForm";
import { BTMovie } from "./BTMovie/BTMovie";
import { BTMovieBooking } from "./BTMovieBooking/BTMovieBooking";
import { BTPhone } from "./BTPhone/BTPhone";
import { BTShoeShop } from "./BTShoeShop/BTShoeShop";
import { Databinding } from "./databinding/Databinding";
import { DemoRedux } from "./DemoRedux/DemoRedux";
import { DemoState } from "./DemoState/DemoState";
import { DemoUseEffect } from "./DemoUseEffect/DemoUseEffect";
import { HandleEvent } from "./HandleEvent/HandleEvent";
import { DemoProps } from "./Props/DemoProps";
import { RenderWithCondition } from "./RenderWithCondition/RenderWithCondition";
import { RenderWithMap } from "./RenderWithMap/RenderWithMap";
import { StyleComponent } from "./StyleComponent/StyleComponent";

// JSX => Javascript XML => cú pháp hỗ trợ viết thẻ html ở trong javascript
// attribute => viết theo quy tắc camelCase

// 2 loại component:
// class Component (statefull component) (Hiện tại ko sử dụng) - react life cycle

// function component (stateless component)

// 1 component chỉ đc phép return về duy nhất 1 thẻ jsx

// component lớn nhất trong dự án
function App() {
  return (
    <div className="description" tabIndex="1">
      {/* <FunctionComponent></FunctionComponent>
            <ClassComponent /> */}
      {/* <BTComponent />
      <Databinding />
      <RenderWithCondition />
      <HandleEvent />
      <RenderWithMap />
      <BTMovie />
      <StyleComponent />
      <DemoState />
      <BTCar />
      <DemoProps />
      <BTShoeShop />
      <DemoRedux />
      <BTPhone />
      <BTMovieBooking /> */}
      <BTForm />
      <DemoUseEffect />
    </div>
  );
}

export default App;

// npm i redux react-redux

// npm create vite@latest
