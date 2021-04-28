import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../store/actions/AuthActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

class LoginComponent extends React.Component {

    constructor(props) {
        //When you want to use 'this.props' in constructor,call it as below.
        super(props);
        //Component needs to use local state,so directly use this.state to assign the initial state in the constructor.
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
        //bind the event handler methods for CreateCustomerComponent.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doLogin = this.doLogin.bind(this);

    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    doLogin(e) {
        /** 
        *preventDefault() method cancels the event if 
        *it is cancelable i.e.,the default action that belongs to the event will not occur.
        */
        e.preventDefault();
        const payload = {
            username: this.state.username,
            password: this.state.password
        }

        if (this.validate()) {
            this.props.authActions.doLogin(payload);
        }

    }

    validate() {
        let username = this.state.username;
        let password = this.state.password;
        let errors = {};
        let isValid = true;

        if (!username) {
            isValid = false;
            errors["username"] = <h4>"Please enter your name."</h4>;
        }

        if (!password) {
            isValid = false;
            errors["password"] = <h4>"Please enter your password."</h4>;
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {

        const { isAuthUser, user } = this.props;
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);

        if (user !== undefined) {
            if (user.role === "admin" && isAuthUser) return <Redirect to="/admin" />;
            //Authorized so,redirect to admin home page.
            else if (user.role === "customer" && isAuthUser) return <Redirect to={`/customer/${user.customerId}`} />;
            //Authorized so,redirect to customer home page.
            else return <Redirect to='/' />;
            //Not logged in so redirect to login page with the return url.
        }
        // if(isAuthUser === false ) {
        //     console.log("Login Failed");
        // }      

        return (
            <div class="example1">
                <div class="container">




                    {
                        //If not authorized,display as login failed.
                        (this.props.isAuthUser === false) && <div><h3>Login Failed</h3></div>

                    }
                    <center> <h1> Online Ayurvedic Medicine </h1> </center>
                    <br></br>
                    <br></br>
                    <br></br>




                    <center> <p>
                        {/* <TextField id="standard-basic" label="Username" name="username" value={this.state.username} onChange={this.handleInputChange}/> */}
                        <input class="input" type="text" placeholder="User Id" name="username" id="customerId" value={this.state.username} onChange={this.handleInputChange}></input>
                        <div className="text-danger">{this.state.errors.username}</div>
                    </p>
                        <p>
                            {/* <TextField id="standard-basic" label="password" name="password" value={this.state.password} onChange={this.handleInputChange}/> */}
                            <input class="input" type="text" placeholder="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}></input>
                            <div className="text-danger">{this.state.errors.password}</div>
                        </p>
                        <p>
                            <div class="button">
                                {/* <button variant="contained" onClick={this.doLogin}>Login</button> */}
                                <Button variant="contained" color="sucess" onClick={this.doLogin}>Login</Button>&nbsp;&nbsp; 
                                
                            </div>
                            <div class="button">
                            <Button variant="contained" tag={Link} to="/">cancel</Button>
                            </div>
                        </p>
                    </center>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        user: state.authReducer.user,
        isAuthUser: state.authReducer.isAuthUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);