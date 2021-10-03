import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './transport.css';


const Transport = props => (
  <tr>
        <td>{props.transport.drivername}</td>
        <td>{props.transport.drivernic}</td>
        <td>{props.transport.vehicleno}</td>
        <td>{props.transport.drivermobilenumber}</td>
        <td>{props.transport.transportcovidpatient}</td>
        <td>{props.transport.transportnormalpatient}</td>
        
    <td>
    <Link to={"/editTransport/" + props.transport._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTransport(props.transport._id) }}>delete</a>
    </td>
  </tr>
)

export default class ViewTransport extends Component {
  constructor(props) {
    super(props);

    this.deleteTransport = this.deleteTransport.bind(this);

    this.state = {transport: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/transport/')
      .then(response => {
        this.setState({ transport: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTransport(id) {
    axios.delete('http://localhost:5000/transport/'+id)
      .then(response => { console.log(response.data)});
    alert( alert("Are you sure you want to delete the following transport details from the system?"))
    this.setState({
      transport: this.state.transport.filter(el => el._id !== id)
    })
  }

  transportList() {
    return this.state.transport.map(currenttransport => {
      return <Transport transport={currenttransport} deleteTransport={this.deleteTransport} key={currenttransport._id}/>;
    })
  }

  render() {
    return (
      <div className='viewTransportPage'>
        <br />
        <div className='container' id="viewTransportForm">
                    <button className="searchTransportBtn"><Link className="toSearchPage" to="/searchTransport" >Search Transport</Link></button>
                    <h3 className="viewTransportTitle">TRANSPORT</h3>
                    <br />
    
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>DriverName</th>
              <th>DriverNIC</th>
              <th>VehicleNo</th>
              <th>DriverMobileNumber</th>
              <th>TransportCovidPatient</th>
              <th>TransportNormalPatient</th>
              
            </tr>
          </thead>
          <tbody>
            { this.transportList() }
          </tbody>
        </table>
       </div>
      </div>
    )
  }
}