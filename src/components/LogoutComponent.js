import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../store/actions/AuthActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

class LogoutComponent extends Component {

    doLogout = e => {
        e.preventDefault();
        this.props.authActions.logout();
    }

    render() {
        //Redirect to landing page after logout.
        if (this.props.isLoggedOut !== undefined && this.props.isLoggedOut === true) {
            return <Redirect to='/'></Redirect>
        }
        return (
            <div className="float-right">
                {/* <button onClick={this.doLogout}>Logout</button> */}
                <Button color="danger" onClick={this.doLogout} >Logout</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        isLoggedOut: state.authReducer.isLoggedOut
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);