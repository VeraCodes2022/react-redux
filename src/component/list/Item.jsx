import React, { Component } from 'react';
import { connect } from 'react-redux';
import {RemoveItems, updateItems} from '../../redux/action';
import './list.css';



class Item extends Component {

  state={
    mouse:false
  }

  bgChange=(flag)=>{
    return ()=>{this.setState({mouse:flag})}
  }

  handleRemove=(id)=>{
    if(window.confirm('Are You Sure to Delete?')){
      this.props.RemoveItems(id)
    }
    
  }

  handleChange=(id)=>{
    return(e)=>{
      this.props.updateDone(id,e.target.checked)
    }
  }


  handleSelect=(id)=>{
    return (event)=> this.props.updateItems(id,event.target.checked)

  }

  render() {

    const {id,name,done}=this.props;
    const {mouse}=this.state
    return (
      <div>
        <li
        className='container'
        style={{backgroundColor: mouse? '#94c0f766':'#b3caf566'}}
        onMouseEnter={this.bgChange(true)}
        onMouseLeave={this.bgChange(false)}
        >

        <div className='chckbox'>
          <input type='checkbox'
          className='input'
          checked={done}
          onChange={this.handleSelect(id)}   
          /> 
         <span>{name}</span> 
       </div>

        <div className='btns'>
          <button 
          style={{display: mouse? 'block': 'none'}}
          className='deleteBtn'
          onClick={()=>this.handleRemove(id)}>Delete</button>
        </div>

      </li>
      </div>
    )
  }
}

export default connect(

  state=>({
    courses:state
  }),
  {RemoveItems:RemoveItems,
   updateItems:updateItems
  }
)(Item)