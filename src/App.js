import './App.css';
import { Component } from 'react';
import Todo from './components/Todo.js'
import InputComp from './components/InputComp';
import axios from 'axios'; // axios 라이브러리 import


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      todolist:[]
    }
  }
  componentDidMount() {
    this.fetchTodoList(); // 컴포넌트가 마운트되면 데이터베이스에서 할일 목록을 가져옴
  }

  fetchTodoList() {
    axios
        .get('http://localhost:4000/todolist') // 데이터베이스에서 데이터를 가져오는 GET 요청
        .then(response => {
          this.setState({todolist: response.data}); // 가져온 데이터로 상태를 업데이트
        })
        .catch(error => {
          console.error('데이터 가져오기 실패:', error);
        });
  }
  addTodoList=(id,todo)=>{
    alert('추가(App)')
    alert('넘어온 id : ' + (this.state.todolist.length + 1)  )
    //Todo에서 id 값을 설정할 수 없어서 App의 상태값에 +1 해줘야함
    alert('넘어온 할일 : ' + todo)
    // alert(this.state.todolist.length + 1)

    id=this.state.todolist.length + 1

    //넘어온 값 확인됐으면 JSON형태로 묶어주기
    const todoObj = {id:id, todo:todo}
    const concatedList = this.state.todolist.concat(todoObj)

    this.setState({
      todolist:concatedList
    })
  }

  deleteTodoListApp=(id)=>{
    alert('삭제 (App)')
    
    alert('삭제할 번호: ' + id)

    const filteredList = this.state.todolist.filter(
      (data) => (data.id !== id)
      )
      // this.setState({
      //   todolist:filteredList
      // })

      const updatedList = filteredList.map(
        (data,index) => {
    //첫 번째 매개변수는 현재 요소를 나타내고, 두 번째 매개변수는 해당 요소의 인덱스를 나타낸다
          data.id = index + 1
          return data; 
        }
      )
      this.setState({
        todolist:updatedList
      })
  } 
  updateTodoList=(id, todo)=>{
    alert('수정(App)')
    alert('넘어온 id: ' + id)
    alert('넘어온 할일:' + todo)

    let tempTodoList = this.state.todolist
     
    for(let i=0; i<tempTodoList.length; i++){
      if(tempTodoList[i].id === id){
        tempTodoList[i].todo = todo
      }
    }
    this.setState({
      todolist:tempTodoList
    })
  }

  render(){
    const result = this.state.todolist.map(
      (data) => (<Todo key = {data.id}
                        id={data.id}
                        todo = {data.todo}
                        deleteTodoListApp = {this.deleteTodoListApp}
                        updateTodoList={this.updateTodoList}/>)
    )
    return(
      <div id='App'>
        <InputComp addTodoList={this.addTodoList}/>
        {result}
      </div>
    )
  }
}

export default App;