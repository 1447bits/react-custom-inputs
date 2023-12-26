import React from 'react';
import './App.css';
import CustomInputTag from './components/CustomInputTag';

function App() {
  return (
    <div className="App">
      <h1>Example of Custom Input Tags</h1>

      <div className="examples">
        <div className="example">
          <div className='inputBox'>
            <h3>currency : </h3>
            <CustomInputTag type="currency" />
          </div>
          <code>
            {"<CustomInputTag type=\"currency\" />"}
          </code>
        </div>
        <div className="example">
          <div className='inputBox'>
            <h3>percentage : </h3>
            <CustomInputTag type="percentage" />
          </div>
          <code>
            {"<CustomInputTag type=\"percentage\" />"}
          </code>
        </div>
        <div className="example">
          <div className='inputBox'>
            <h3>normal : </h3>
            <CustomInputTag type="normal" />
          </div>
          <code>
            {"<CustomInputTag type=\"normal\" />"}
          </code>
        </div>
      </div>
    </div>
  );
}

export default App;
