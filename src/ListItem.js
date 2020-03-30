import React,{Component} from 'react';
import './ListItem.css'
// const ListItem = (props) => {
//     const item = props.item;
//     if(props.item.done==true)
//         // return  <p className='doneItem'> {item.content}</p>;
//         return <div>
//             <p className='doneItem'> {item.content}</p>
//             <input type='checkbox' checked={item.done}/>
//         </div>
//     else
//         return <div>
//             <p className='unDoneItem'> {item.content}</p>
//             <input type='checkbox' checked={item.done}/>
//         </div>
//         // return <p className='unDoneItem'> {item.content}</p>
// }
class ListItem extends Component{
    constructor(props){
        super(props)
   
    }
    onAddInputClick=()=>{
        this.props.changeListStage(this.props.id);
        console.log(this.props.id)
    }
    render(){
    if(this.props.item.done==true)
        // return  <p className='doneItem'> {item.content}</p>;
        return <div key={this.props.id}>
            <p className='doneItem'> {this.props.item.content}</p>
            <input type='checkbox' checked={this.props.item.done}/>
        </div>
    else
        return <div key={this.props.id}>
            <p className='unDoneItem'> {this.props.item.content}</p>
            <input type='checkbox' checked={this.props.item.done} onClick={this.onAddInputClick}/>
        </div>
    }

}
export default ListItem;