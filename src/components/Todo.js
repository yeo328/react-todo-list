import '../css/Todo.css';
import { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            edit:false,
            todo:this.props.todo
        }
    }

    deleteTodoList=()=>{
        alert('삭제(Todo)')
        this.props.deleteTodoListApp(this.props.id)
    }
    updateTodoList=()=>{
        alert('수정(Todo)')
        // this.props.updateTodoList() // 넘길 인수값 넣어서 if문에 넣어주기 
        if(this.state.edit === true){
            this.props.updateTodoList(this.props.id,this.state.todo)
        }

        this.setState({
            edit: !this.state.edit
        })
    }
    todoChange=(e)=>{ //수정 인풋값 setState 해주기 
        console.log(e.target.value)
        this.setState({
            todo:e.target.value
        })
    }
    render(){
        const {edit} = this.state
        if(edit === false){
            return(
                <div id='todo' key={this.props.id}>
                    <div>
                        할일:{this.props.todo}
                    </div>
                    <div>
                        <button onClick={this.updateTodoList}>수정</button>
                        <button onClick={this.deleteTodoList}>삭제</button>
                    </div>
                </div>
            )
    
        }else if(edit === true){
            return(
                <div id='todo' key={this.props.id}>
                    <div>
                        할일:<input type='text' defaultValue={this.props.todo}
                        onChange={this.todoChange}/>
                    </div>
                    <div>
                        <button onClick={this.updateTodoList}>수정</button>
                        <button onClick={this.deleteTodoList}>삭제</button>
                    </div>
                </div>
            )
    
        }
        return(
            <div id='todo' key={this.props.id}>
                <div className=''>
                    할일:{this.props.todo}
                </div>
                <div>
                    <button onClick={this.updateTodoList}>수정</button>
                    <button onClick={this.deleteTodoList}>삭제</button>
                </div>
            </div>
        )

    }
}

export default Todo;