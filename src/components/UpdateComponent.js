import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as customerActions from '../store/actions/CustomerActions';
import * as medicineActions from '../store/actions/MedicineActions';

class UpdateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.medicineId = React.createRef();
        this.medicineName = React.createRef();
        this.medicineCost = React.createRef();
        this.mfd = React.createRef();
        this.expiryDate = React.createRef();
        this.quantity = React.createRef();
        this.categoryId = React.createRef();
        this.companyName = React.createRef();

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.updateMedicine = this.updateMedicine.bind(this);
    }

    // handleInputChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }
    componentDidMount() {
        const { medicineActions, match } = this.props;
        medicineActions.fetchMedicineById(match.params.id);
    }

    updateMedicine(e) {
        e.preventDefault();

        let payload = {
            medicineId: this.medicineId.current.value,
            medicineName: this.medicineName.current.value,
            medicineCost: this.medicineCost.current.value,
            mfd: this.mfd.current.value,
            expiryDate: this.expiryDate.current.value,
            quantity: this.quantity.current.value,
            categoryId: this.categoryId.current.value,
            companyName: this.companyName.current.value,

        }


        const { medicineActions } = this.props;
        medicineActions.updateMedicine(payload);

    }

    render() {
        const { medicine, isUpdated } = this.props;

        if (isUpdated !== undefined && isUpdated) {
            // return <Redirect to='/customer'/>
            alert("updated successfully");
        }

        return (
            <div class="loginbg-img">
                <center>
                    {
                        medicine !== undefined ?
                            <form onSubmit={this.updateMedicine}>
                                <p >
                                    <input class="input" defaultValue={medicine.medicineId} placeholder="Medicine Id" type="text" ref={this.medicineId} />
                                </p>  <p>
                                    <input class="input" defaultValue={medicine.medicineName} placeholder="Medicine Name" type="text" ref={this.medicineName} />

                                </p>    <p>

                                    <input class="input" defaultValue={medicine.medicineCost} placeholder="Medicine Cost" type="text" ref={this.medicineCost} />

                                </p>   <p>

                                    <input class="input" defaultValue={medicine.mfd} placeholder="Manufactured date" type="text" ref={this.mfd} />

                                </p>  <p>

                                    <input class="input" defaultValue={medicine.expiryDate} placeholder="Expiry date" type="text" ref={this.expiryDate} />

                                </p>  <p>

                                    <input class="input" defaultValue={medicine.quantity} placeholder="quantity" type="text" ref={this.quantity} />

                                </p>   <p>


                                    <input class="input" defaultValue={medicine.categoryId} placeholder="Category" type="text" ref={this.categoryId} />

                                </p>    <p>


                                    <input class="input" defaultValue={medicine.companyName} placeholder="Company name" type="text" ref={this.companyName} />

                                </p>   <p>

                                    <ButtonGroup>
                                        {/* <input type="submit" value="submit"></input> */}
                                        <Button variant="contained" color="success" type="submit" value="submit" >submit</Button>&nbsp;&nbsp;
                                        <Button variant="contained" color="primary" tag={Link} to="/admin/medicine">Cancel</Button>
                                    </ButtonGroup>
                                </p>
                            </form>
                            : <h2>Loading....</h2>
                    }
                </center>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        medicine: state.medicineReducer.medicine,
        isUpdated: state.medicineReducer.isUpdated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        medicineActions: bindActionCreators(medicineActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);