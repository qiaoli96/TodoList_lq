import React,{Component} from 'react';
import ListHead from "./ListHead";
import ReactDOM from 'react-dom';
import List from './List';


class App extends Component {
  render(){
      return(
        <div>
          <ListHead />
          <List />
        </div>
      );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



