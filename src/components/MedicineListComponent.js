import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as medicineActions from '../store/actions/MedicineActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import { Link } from 'react-router-dom';


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
class GetAllMedicinesComponent extends Component {


    constructor() {
        super();

    }


    componentDidMount() {
        this.props.medicineActions.fetchAllMedicines();
    }
    handleDelete() {
        alert("admin Deleted")
    }



    render() {
        return (
            <div>
                {
                    this.props.medicines !== undefined ?
                        <TableContainer>
                            <Table border="1">
                                {/* Table to display all the medicine details */}
                                <caption>customer Details</caption>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Medicine ID</StyledTableCell>
                                        <StyledTableCell>Medicine Name</StyledTableCell>
                                        <StyledTableCell>Medicine Cost</StyledTableCell>
                                        <StyledTableCell>Mfd</StyledTableCell>
                                        <StyledTableCell>Expiry Date</StyledTableCell>
                                        <StyledTableCell>Quantity</StyledTableCell>
                                        <StyledTableCell>Category</StyledTableCell>
                                        <StyledTableCell>Company name</StyledTableCell>
                                        <StyledTableCell>View</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.medicines.map((medicine, index) =>
                                            <StyledTableRow>
                                                <td>{medicine.medicineId}</td>
                                                <td>{medicine.medicineName}</td>
                                                <td>{medicine.medicineCost}</td>
                                                <td>{medicine.mfd}</td>
                                                <td>{medicine.expirydate}</td>
                                                <td>{medicine.quantity}</td>
                                                <td>{medicine.categoryId}</td>
                                                <td>{medicine.companyName}</td>
                                                <td><Link to={`/medicine/${medicine.medicineId}`}>View</Link></td>
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

    return { medicines: state.medicineReducer.medicines }
}

function mapDispatchToProps(dispatch) {
    return {
        medicineActions: bindActionCreators(medicineActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllMedicinesComponent);