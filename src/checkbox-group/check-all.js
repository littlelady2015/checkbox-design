import React, { Component} from 'react';
import Checkbox from '../checkbox/checkbox';

class Checkall extends Component {
  constructor(props) {
    super(props);
  }

  renderEl =()=> {
    let tmel,label,inputStyle;
    let { optStatus, checked, onChange} = this.props;
    if (optStatus === 'no-checked') {
      label = '选择为空';
      inputStyle = 'input-inner-unchecked';
    } else if (optStatus === 'all-checked') {
      label = '全选';
      inputStyle = 'input-inner-checked';
    } else {
      label = '部分选择';
      inputStyle = 'input-inner-checked';
    }
    tmel = <Checkbox checked={checked} label={label} style={inputStyle} handleCheckboxChange={onChange} />;
    return tmel;
  }
   
  render(){
    return <div className="check-all"> {this.renderEl()} </div>;
  }
} 
export default Checkall;
