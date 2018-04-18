import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import Listingstore from '../store/Listingstore';
import Userprofile from '../admin/components/Userprofile';
import Login from './Login';
import {observer,inject} from  'mobx-react';

inject('Listingstore')
@observer
export default class Admin extends Component {

    render() {
        return (
            <Userprofile />
        );
    }
}
