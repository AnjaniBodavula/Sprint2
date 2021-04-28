import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
class GetAllCustomersComponent extends Component {


    constructor() {
        super();

    }


    componentDidMount() {
        this.props.customerActions.fetchAllCustomers();
    }
    handleDelete() {
        alert("admin Deleted")
    }



    render() {
        return (
            <div>
                {
                    this.props.customers !== undefined ?
                        <TableContainer>
                            <Table border="1">
                                {/* Displays a table format to view all the customer details.*/}
                                <caption>customer Details</caption>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Customer ID</StyledTableCell>
                                        <StyledTableCell>Customer Name</StyledTableCell>
                                        <StyledTableCell>MobileNumber</StyledTableCell>
                                        <StyledTableCell>Emailid</StyledTableCell>
                                        <StyledTableCell>VIEW</StyledTableCell>
                                        <StyledTableCell>DELETE</StyledTableCell>
                                        <StyledTableCell>UPDATE</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.customers.map((customer, index) =>
                                            <StyledTableRow>
                                                <td>{customer.customerId}</td>
                                                <td>{customer.customerName}</td>
                                                <td>{customer.mobileNumber}</td>
                                                <td>{customer.emailId}</td>
                                                {/* redirects to the individual customer details page when the url is given.*/}
                                                <td><Link to={`/customer/${customer.customerId}`}>View</Link></td>
                                                {/* Deletes the specific customer when the Delete button is clicked.*/}
                                                <td><Button variant="contained" color="primary" onClick={() => { this.props.customerActions.deleteCustomer(customer.customerId); alert("Customer deleted successfully with id " + customer.customerId); }}>Delete</Button></td>
                                                {/* redirects to the customer details update page when the url is given.*/}
                                                <td><Link to={`/updatecustomer/${customer.customerId}`}>Update</Link> </td>

                                            </StyledTableRow>)
                                    }
                                </TableBody>

                            </Table>
                        </TableContainer>
                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {

    return { customers: state.customerReducer.customers }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllCustomersComponent);