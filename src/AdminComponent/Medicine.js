import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MedicineActions from '../store/actions/MedicineActions';
import AppNavbar from './AppNavbar';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';




class Medicine extends Component {


    constructor() {
        super();

    }

    //React lifecycle method to fetch the data of the medicines,usually runs after first render() lifecycle.
    componentDidMount() {
        this.props.MedicineActions.fetchAllMedicines();
    }
    handleDelete() {
        alert("admin Deleted")
    }



    render() {
        return (
            <div className="medicine">
                <AppNavbar />
                <Container fluid>
                    <div className="float-right">
                        {/*redirects to the medicine details page at the admin side with the url given to add a new medicine . */}
                        <Button color="success" tag={Link} to="/admin/medicine/new">Add Medicine</Button>
                    </div>
                    <h3>Medicine Details</h3>
                    {
                        this.props.medicines !== undefined ?


                            <Table id="mt-4">



                                <tr>
                                    <th width="20%">Medicine ID</th>
                                    <th width="20%">Medicine Name</th>

                                    <th width="15%">Actions</th>

                                </tr>

                                {
                                    this.props.medicines.map((medicine, index) =>
                                        <tr>
                                            <td>{medicine.medicineId}</td>
                                            <td>{medicine.medicineName}</td>
                                            <td>
                                                <ButtonGroup>
                                                    {/*redirects to the medicine details page at the admin side with the url given to view each medicine . */}
                                                    <Button size="sm" color="primary" tag={Link} to={"/admin/medicine/view/" + medicine.medicineId}>View</Button>&nbsp;&nbsp;
                                                    {/*redirects to the medicine details page at the admin side with the url given to edit or update each medicine . */}
                                                    <Button size="sm" color="secondary" tag={Link} to={"/admin/medicine/update/" + medicine.medicineId}>Edit</Button>&nbsp;&nbsp;
                                                    <Button size="sm" variant="contained" color="danger" onClick={() => { this.props.MedicineActions.deleteMedicine(medicine.medicineId); alert("Medicine deleted successfully with id " + medicine.medicineId); }}>Delete</Button>
                                                </ButtonGroup>
                                            </td>

                                        </tr>)
                                }



                            </Table>

                            :
                            <h3>Loading....</h3>

                    }

                </Container>
                <p>
                    <ButtonGroup>
                        {/*redirects to the customer details page at the admin side with the url. */}
                        <Button size="sm" color="primary" tag={Link} to={"/admin"}>Back</Button>

                    </ButtonGroup>
                </p>
            </div>
        );
    }
}
//component will receive: props.medicines.
function mapStateToProps(state) {
    //It returns a plain object by selecting the part of the data from the store that the Medicine component needs.
    return { medicines: state.medicineReducer.medicines }
}
//used for dispatching medicine actions to the store.
function mapDispatchToProps(dispatch) {
    //dispatching actions returned by action creators.
    return {
        MedicineActions: bindActionCreators(MedicineActions, dispatch),

    }
};
//exports the Medicine component that can both get the current state from the store,and dispatch an action to the store to trigger and update to the state.
export default connect(mapStateToProps, mapDispatchToProps)(Medicine);