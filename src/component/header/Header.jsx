import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addItems} from '../../redux/action';
import { nanoid } from 'nanoid';
import './header.css';

class Header extends Component {


    handleAdd=(event)=>{

     const {keyCode}=event;
     if(keyCode !==13)return
     if(event.target.value.trim()===''){
         alert("please enter in content")
         return
     }

       const newItem={id:nanoid(),name:event.target.value}
       this.props.addItems(newItem);
       event.target.value=''

    }

  render() {
    return (
      <div className='headerpart'>
        <input 
            className='headerinput'
            onKeyUp={this.handleAdd}
        />
      </div>
    )
  }
}
export default connect(
  state=>({
    courses:state.courses
  }),
  {addItems:addItems}
)(Header)
