import React,{Component} from 'react';
import ListItem from './ListItem';
import NewItem from './NewItem.js';
import { isThisExpression } from '@babel/types';
class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            toDoList : [
                {
                    content:'do homework',
                    done:true
                },
                {
                    content:'play game',
                    done:false
                }
            ]
        }
            
        
    }

   addNewTtem = (newItemContent) => {
        const newList = [...this.state.toDoList,{
            content:newItemContent,
            done:false
        }];
        console.log(this.state.toDoList)
        this.setState((state)=>{
             this.state.toDoList = newList;
             return this.state.toDoList
        })
        
    }
    changeListStage =(id)=>{
        this.setState( (state) => {
            this.state.toDoList[id].done = true
           return this.state.toDoList;
        })
        
    }

    render(){
        return(
          <div>
              {this.state.toDoList.map((item,key) => <ListItem item={item} changeListStage={this.changeListStage} id={key} />)}
              <NewItem addItem={this.addNewTtem}/>
          </div>  
        );
    }

}
export default List;