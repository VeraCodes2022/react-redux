
const courses=[
    {id:'001', name:'Java', done:false}, 
    {id:'002', name:'JavaScript', done:false}, 
    {id:'003', name:'C++', done:false} 
]



export const myReducer=(state=courses, action)=>{
    const {type,data}=action
    switch (type) {
        case 'AddItems':
            return [data,...state]
        case 'DeleteItems':
            return state.filter(
                (course)=>{return course.id !== action.id}
            )
        case 'UpdateItems': 
        return state.map((course)=>{
                if(course.id === action.id){
                    return {...course, done:data}
                }else{return course}
            }
        )
        case 'SelectAll':
            return state.map(
                (course)=>{return {...course,done:data}}
            )
        case 'DeleteAll':
            return state.filter(
                course=>{return course.done===false}
            )
        default:
            return state;
    }

}


// //   用于清除所有完成的选项clearall 
// clearAllItems=()=>{
//     const {todos}=this.state;
//     const newtodos=todos.filter(
//         (todo)=>{return todo.done===false}  //等于取反 !todo.done
//     )

//         this.setState({todos:newtodos})
// }

