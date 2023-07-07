import '../css/InputComp.css';
import { Component } from 'react';

class InputComp extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            todo:''
        }
    }
    addTodoList=()=>{
        alert('추가(InputComp)')
        // const {id} = this.props+1
        const {id} = this.props.id+1
        // alert('추가할 id ' + this.props+1)
        alert('추가할 id ' + id)
        const{todo} = this.state
        this.props.addTodoList(id,todo)
    }
    todoChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            todo:e.target.value
        })
    }

    render(){
        return(
            <div id='input-comp'>  
            <h2>To Do List</h2>
                <input className='input' type='text' placeholder='할일입력'
                onChange={this.todoChange}/>
                <button className='add-btn' onClick={this.addTodoList}>추가</button>
            </div>
        )
    }
}

export default InputComp;