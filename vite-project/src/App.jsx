import Header from "./components/Header";
import BioPhoto from "./components/BioPhoto";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ImmediatelyInvoked from "./components/ImmediatelyInvoked";
import LoopInside from "./components/LoopInside";
import IfElse from "./components/Conditional Rendering/IfElse";
import SwitchCase from "./components/Conditional Rendering/SwitchCase";
import TerneryOperator from "./components/Conditional Rendering/TerneryOperator";
import LogicalAnd from "./components/Conditional Rendering/LogicalAnd";
import InvokeFunction from "./components/Conditional Rendering/InvokeFunction";

import SimpleData from "./components/PassingProps/SimpleData";
import ObjectData from "./components/PassingProps/ObjectData";
import Function from "./components/PassingProps/Functon";
import AddingEventHandler from "./components/Responding to Events/AddingEventHandler";
import PreventingDefaultBehaviour from "./components/Responding to Events/PreventingDefaultBehaviour";
import UseRef from "./components/React Hook/UseRef";
import UseState from "./components/React Hook/UseState";
import ProjectToDoList from "./components/React Hook/ProjectToDoList";
import ProjectFormSubmission from "./components/React Hook/ProjectFormSubmission";
import UseEffect from "./components/React Hook/UseEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const App = () => {
  //   const Data = {
  //     Name: "Tasin Islam",
  //     Age: 28,
  //     Address: "17/B Farashganj ShamBazar",
  //   };

  //   const ClickAlert = () => {
  //     alert("Hello Word! I am Tasin Islam");
  //   };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <UseEffect /> */}
      {/* <ProjectFormSubmission /> */}
      {/* <ProjectToDoList />
      <UseState />
      <UseRef />
      <PreventingDefaultBehaviour />
      <AddingEventHandler />
      <Function click={ClickAlert} />
      <ObjectData item={Data} />
      <SimpleData
        title="Passing Property"
        des="Hello World! I am Tasin Islam!"
      />
      <InvokeFunction />
      <LogicalAnd />
      <TerneryOperator />
      <SwitchCase />
      <LoopInside />
      <ImmediatelyInvoked />
      <IfElse />
      <Header />
      <BioPhoto />
      <ContactForm />
      <Footer /> */}
    </div>
  );
};

export default App;
