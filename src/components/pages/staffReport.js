import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import './staff.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable'


const Salary = props => (
    <tr>
        <td>{props.salary.date}</td>
        <td>{props.salary._id}</td>
        <td>{props.salary.name}</td>
        <td>{props.salary.totalSalary}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { salary: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/salary/')
            .then(response => {
                this.setState({ salary: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    salaryDetailsList() {
        return this.state.salary.map(currentsalary => {
            return <Salary salary={currentsalary} deleteSalary={this.deleteSalary} key={currentsalary._id} />;
        })
    }

    jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');

        doc.autoTable({ html: '#salaryDetailsTable' })

        doc.save("Staff_Salary_Report.pdf");


    }


    render() {
        return (
            <div className='viewSalaryPage'>
                <br />
                <div className='container' id="viewSalaryForm">
                    <h3 className="staffSalaryDetails">STAFF SALARY DETAILS</h3>
                    <table className="table" id="salaryDetailsTable">
                        <thead className="thead-light">
                            <tr>
                                <th>Date</th>
                                <th>Staff ID</th>
                                <th>Name</th>
                                <th>Total Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.salaryDetailsList()}
                        </tbody>
                    </table>

                    <button onClick={this.jsPdfGenerator}>GENERATE REPORT</button>
                </div>
            </div>
        )
    }
}