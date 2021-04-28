import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../store/actions/UserActions';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Redirect } from 'react-router-dom';

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            password: '',
            role: 'customer',
            errors: {}
        }
        //bind methods for register component.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createUser(e) {
        e.preventDefault();

        let payload = {

            customerId: this.state.customerId,
            password: this.state.password
        }
        console.log(payload);
        
            const { userActions } = this.props;
            userActions.createUser(payload);
        
    }


    render() {
        const { user } = this.props;
        //If Authorized,redirect to customers home page.
       
        if (user !== undefined) {
            alert("user Created Succssfully with id" + this.props.user.customerId)
            return <Redirect to="/register/addcustomer" />;
        }
        return (
            <div class="loginbg-img">
                <center class="loginbox">
                    {/* Form to add a new user*/}                                                                                                                                                                                                                <br></br> <br></br> <br></br> <br></br> <br></br>
                    <h3>Add User</h3>
                    <form onSubmit={this.createUser} method="post">

                        {/* <p>
                            <label>UserName:</label>
                            <input class="input" type="number" placeholder="USERname" name="customerId" id="customerId" value={this.state.customerId} onChange={this.handleInputChange}></input>

                        </p> */}
                        <p>

                            <label> Password:</label>
                            <input class="input" type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}></input>
                            <div className="text-danger">{this.state.errors.password}</div>
                        </p>
                        <p>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </p>
                        <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
                        {/* <p>
                        <input type="submit" value="submit"></input>
                        </p> */}
                        <p>
                         <ButtonGroup>
                           
                            <Button variant="contained" color="success" type="submit" value="submit" onClick={this.createUser}>signUp</Button>&nbsp;&nbsp;
                             <Button variant="contained" color="primary" tag={Link} to="/">cancel</Button>
                        </ButtonGroup> 
                        </p>
                    </form>
                </center>


                {
                    this.props.user !== undefined &&
                    alert("user Created Succssfully with id" + this.props.user.customerId)

                }
            </div>);


    }
}

function mapStateToProps(state) {

    return { user: state.userReducer.newUser }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
