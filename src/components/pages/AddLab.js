import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import './lab.css';

export default class AddLab extends Component {
    constructor(props) {
        super(props);

        this.onChangePatientname = this.onChangePatientname.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeTestdate = this.onChangeTestdate.bind(this);
        this.onChangeMobilenumber = this.onChangeMobilenumber.bind(this);
        this.onChangeTesttype = this.onChangeTesttype.bind(this);
        this.onChangeTestresult = this.onChangeTestresult.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            patientname: '',
            age: '',
            gender: '',
            testdate: new Date(),
            mobilenumber: '',
            testtype: '',
            testresult: '',

        }
    }


    onChangePatientname(e) {
        this.setState({
            patientname: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeTestdate(date) {
        this.setState({
            testdate: date
        });
    }

    onChangeMobilenumber(e) {
        this.setState({
            mobilenumber: e.target.value
        });
    }

    onChangeTesttype(e) {
        this.setState({
            testtype: e.target.value
        });
    }

    onChangeTestresult(e) {
        this.setState({
            testresult: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const lab = {
            patientname: this.state.patientname,
            age: this.state.age,
            gender: this.state.gender,
            testdate: this.state.testdate,
            mobilenumber: this.state.mobilenumber,
            testtype: this.state.testtype,
            testresult: this.state.testresult
        }

        console.log(lab);

        axios.post('http://localhost:5000/lab/add', lab)
            .then(res => console.log(res.data));

        window.location = '/';
    }
    render() {
        return (
            <div className="AddLab">
                <h3>ADD LAB RESULT</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label><b>Patient Name: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.patientname}
                            placeholder="Enter Patient's Full Name"
                            onChange={this.onChangePatientname} />


                    </div>
                    <div className="form-group">
                        <label><b>Age: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            placeholder="Enter Patient's Age"
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div class="form-group">
                        <label><b>Gender: </b></label>
                        <select value={this.state.Gender} onChange={this.onChangeGender} >
                            <option selected disabled value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>

                        </select></div>


                    <div className="form-group">
                        <label><b>Mobile Number: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.mobilenumber}
                            pattern="[0-9]*"
                            maxLength="10"
                            placeholder="Enter Mobile Number"
                            onChange={this.onChangeMobilenumber}
                        />
                    </div>
                    <div className="form-group">
                        <label><b>Test Types: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.testtype}
                            placeholder="Enter Patient's Test Names"
                            onChange={this.onChangeTesttype}
                        />
                    </div>
                    <div className="form-group">
                        <label><b>Test Result: </b></label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.testresult}
                            placeholder="Enter Test Results"
                            onChange={this.onChangeTestresult}
                        />
                    </div>
                    <div className="form-group">
                        <label><b>Test Date: </b></label>
                        <div>
                            <DatePicker
                                selected={this.state.testdate}
                                onChange={this.onChangeTestdate}
                            />
                        </div>
                    </div>

                    <div className="form">
                        <input type="submit" value="ADD RESULT DETAILS" className="btn btn-primary" id="btn1" />
                    </div>
                </form>
            </div>
        )
    }
}
