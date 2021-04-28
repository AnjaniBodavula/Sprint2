import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as medicineActions from '../store/actions/MedicineActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';


class GetMedicineByIdComponent extends Component {
    //React component life cycle method to fetch medicines by id.
    componentDidMount() {
        const { medicineActions, match } = this.props;
        medicineActions.fetchMedicineById(match.params.id);
    }
    render() {
        const { medicine } = this.props;
        return (
            <div className="medicine">
                {
                    medicine !== undefined ?
                        <Table id="mt-4">

                            <tr>
                                <th width="10%">Medicine ID</th>
                                <th width="10%">Medicine Name</th>
                                <th width="10%">Medicine Cost</th>
                                <th width="10%">Mfd</th>
                                <th width="10%">Expiry Date</th>
                                <th width="10%">Quantity</th>
                                <th width="10%">Category</th>
                                <th width="10%">Company name</th>

                            </tr>


                            <tr>
                                <td>{medicine.medicineId}</td>
                                <td>{medicine.medicineName}</td>
                                <td>{medicine.medicineCost}</td>
                                <td>{medicine.mfd}</td>
                                <td>{medicine.expiryDate}</td>
                                <td>{medicine.quantity}</td>
                                <td>{medicine.categoryId}</td>
                                <td>{medicine.companyName}</td>
                            </tr>
                        </Table>
                        :
                        <h3>Loading....</h3>
                }
                <p>
                    <ButtonGroup>
                        {/*redirects to the customer details page at the admin side with the url. */}
                        <Button size="sm" color="primary" tag={Link} to={"/admin/medicine"}>Back</Button>

                    </ButtonGroup>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(GetMedicineByIdComponent);