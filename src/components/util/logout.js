import React from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Authorization from '../redirectPrincipal';

const handleLogout = (props) => {
	console.log(props)
	const auth = new Authorization();
		if(window.confirm('¿Seguro que desea cerrar la sesion?')){
			auth.logout(props);
		}
	}

export const Logout = (props) =>{
		return (
<div className="logout" >
    <MDBDropdown size="sm">
      <MDBDropdownToggle caret color="info">
        Usuario
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Perfil</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem onClick={() => handleLogout(props)}>Cerrar sesion</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
</div>
  );
}
