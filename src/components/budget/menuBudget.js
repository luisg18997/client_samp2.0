import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Principal from './mainBudget';
import Listado from './ListadoPlanillas';

import MemoryRouter from 'react-router/MemoryRouter';


const styles = {
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {

    left: false,

  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;




    const sideList = (
      <div className={classes.list}>


        <List>
       <ListItem component={Link} to={"/Presupuesto"} button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>

      <ListItemText primary="mainBudget" />
    </ListItem>

       <ListItem component={Link} to={"/Presupuesto/mainBudget2"} button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>

      <ListItemText primary="mainBudget2" />
    </ListItem>
        </List>


      </div>


    );




    return (
     <Router>
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Menu</Button>
           <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >


            {sideList}


         <Switch>
                <Route exact path="/Presupuesto/" component={Principal} />
               <Route exact path="/Presupuesto/mainBudget2" component={Listado} />

      </Switch>


          </div>
        </Drawer>
             </div>
              </Router>
    );

  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
