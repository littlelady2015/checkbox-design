import React, { Component,useState} from 'react';
import Checkbox from '../checkbox/checkbox';
import './checkgroup.scss';
function CheckboxGroup(props){
        const dftLen = props.defaultValue.length;
        const optLen = props.options.length;
        let [Checked, setChecked] = useState(false);
        
        let checkAllStatus = () => {
            if (dftLen === optLen) return 'allChecked';
            if (dftlen === 0) return 'noChecked';
            else return 'partialChecked';
        }
            
        let handleCheckboxChange = () => {
            setChecked(() => (!Checked));
            const groupStatus = checkAllStatus;
            props.change(Checked);
        }

        let handleitem = (state, value) => {
            props.changeitem(state, value);
        }
        let renderItem= () =>{
            return props.options.map(item => {
                const shouldOptSelect = props.defaultValue.includes(item);
                return (
                <Checkbox 
                  key={item}
                  label={item}
                  checked={shouldOptSelect}
                  style={shouldOptSelect ? 'input-inner-checked' : 'input-inner-unchecked'}
                  handleCheckboxChange={() => handleitem(shouldOptSelect, item)} 
                />);
            })
        }
        return (
            <div className="checkgroup">
                {renderItem()}
            </div>

        )
    }
export default CheckboxGroup;
    
