import './App.css';
import DialogProvider from './DialogProvider';
import Content from './Content';
import Nest from './Nest';
import Test from './Test';


function App() {
  
  return (
    <DialogProvider>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Nest/>
      <Test/>
      <Content />
    </div>
  </DialogProvider>
  );
}

export default App;
