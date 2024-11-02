import React from 'react';
import FormComponent from './Components/FormComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center bg-danger-subtle
 vh-100" >
      <div>
        <h1 className="text-center mb-5 fw-bold ">Form Validation in React</h1>
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
