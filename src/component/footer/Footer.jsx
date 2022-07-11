import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SelectedAll,DeleteAll} from '../../redux/action';
import './footer.css';

class Footer extends Component {
  state={
    mouse:false
  }

  bgChange=(flag)=>{
    return ()=>{this.setState({mouse:flag})}
  }

   handleDeleteall=()=>{
    if(window.confirm('Are You Sure to Delete All?')){
      this.props.DeleteAll()
    }
   }

    selectAll=(event)=>{
      this.props.SelectedAll(event.target.checked)
    }

  render() {
    const {courses}=this.props;
    const countDone=courses.reduce((prev,course)=>prev+ (course.done? 1:0),0)
    const totalDone=this.props.courses.length;

    return (
      <div className='footerwrapper'
      style={{backgroundColor: this.state.mouse? '#8ab6ec66':'#b3caf566'}}
      onMouseEnter={this.bgChange(true)}
      onMouseLeave={this.bgChange(false)}
      >
        <li className='footerlist'>
          <div className='checkbox'>
            <input
              type='checkbox'
              className='chkbox'
              checked={countDone===totalDone && totalDone !=0}
              onChange={this.selectAll}
              />
            <span className='footspan'>Select All</span>
          </div>
          <p className='footspan'>{countDone} / {totalDone}{countDone >1 ? ' have':' has'} been done.</p>
         <button 
         className='dltbutton'
         onClick={this.handleDeleteall}
         >Delete All</button>
        </li>
        
    </div>
      
    )
  }
}
export default connect(
    state=>({
        courses:state
    }),
    {SelectedAll:SelectedAll,
      DeleteAll:DeleteAll
    }
)(Footer)