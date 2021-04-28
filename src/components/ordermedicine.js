import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as medicineActions from '../store/actions/MedicineActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

 
class ordermedicine extends Component {
 
    componentDidMount() {
        const { medicineActions, match } = this.props;
        medicineActions.fetchMedicineById(match.params.id);
    }
    render() {
        const { medicine } = this.props;
        return (
            <div> 


            </div>
            );
        }
    }
     
    function mapStateToProps(state) {
     
        return { medicine: state.medicineReducer.medicine }
    }
     
    function mapDispatchToProps(dispatch) {
        return {
            medicineActions: bindActionCreators(medicineActions, dispatch)
        }
    };
     
    export default connect(mapStateToProps, mapDispatchToProps)(ordermedicine);