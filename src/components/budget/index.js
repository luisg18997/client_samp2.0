
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TemporaryDrawer from './menuBudget';


      ReactDOM.render(<TemporaryDrawer />,document.querySelector('#root'));	


class budget extends Component {
	render(){
		return (
			
				<TemporaryDrawer />	
			
		)
	}
}

export default budget;
