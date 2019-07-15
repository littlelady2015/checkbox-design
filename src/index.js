
import React, { Component } from 'react'
import Checkbox from './checkbox/checkbox'
import CheckboxGroup from './checkbox-group/check-group'
import Checkall from './checkbox-group/check-all';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      values:['wiki'],
      optStatus: '',
      allChecked: false,
      singleChecked: '',
    };
    this.options=['wiki','confluence','csdn']
  }
  componentDidMount() {
    this.changeAllStatus();
    this.handleChange();
  }
  handleChange=()=> {
    this.setState({
        checked: !this.state.checked,
        singleChecked: this.state.checked ? 'input-inner-checked' : 'input-inner-unchecked',
    });
  }

  selectAll=()=>{
    this.setState({
      allChecked: !this.state.allChecked,
      values: this.state.values.length === 0 ? [... this.options] : [],
      optStatus: this.state.allChecked ? 'no-checked' : 'all-checked',
    })
  }
  
  changeitem=(state,value)=>{
      const values=this.state.values;
      if(!state){
        values.push(value);
      }else{
        values.splice(values.indexOf(value),1)
      }
      this.changeAllStatus();
      this.setState({
          values:[...values],
      });
  }
  changeAllStatus = () => {
    const values = this.state.values;
    let _optStatus, _allChecked,_inputStyle;
    if (values.length === this.options.length) { 
      _optStatus= 'all-checked';
      _allChecked = true;
      _inputStyle = 'input-inner-checked';
    } else if (values.length === 0){
      _optStatus = 'no-checked';
      _allChecked = false;
      _inputStyle = 'input-inner-unchecked';
    }
    else {
      _optStatus = 'partial-checked';
      _allChecked = true;
      _inputStyle = 'input-partial-checked';
    }
    this.setState({
      optStatus:_optStatus,
      allChecked:_allChecked,
      inputStyle: _inputStyle,
    });
  }
  render () {
      return(
        <div>
          <label>Checkbox示例：</label>
          <Checkbox 
            label="wiki"
            style={this.state.singleChecked}
            handleCheckboxChange={this.handleChange}
            checked={this.state.checked}
          />
          <label>CheckboxGroup示例：</label>
          <br />
          <Checkall
            optStatus={this.state.optStatus}
            onChange={this.selectAll}
            checked={this.state.allChecked}
          />
          <CheckboxGroup
            options={this.options}
            defaultValue={this.state.values}
            changeitem={this.changeitem}
          />
        </div> 
      );
           
  }
}
