import React from "react";
import Axios from "axios";
import "./PrescriptionPage.css";
import Logo from './Logo'

class PrescriptionPage extends React.Component {
  state = {
    order_name: "",
    med_name: "",
    date: "",
    dosage: 0,
    morning: false,
    midday: false,
    evening: false,
    night: false,
  };

  onChange = (e) => {
    if (e.target.name !== "moment") {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        [e.target.id]: e.target.checked,
      });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    const url = "http://localhost:3300/medications";
    Axios.post(url, this.state)
      .then((res) => res.data)
      .catch(err => console.log(err));
  };

  render() {
    return (
      
      <div className="PrescriptionPage-container">
        <Logo/>
        <h1 className="Prescription-title">Prescription</h1>

        <form className="PrescriptionPage-form" onSubmit={this.submitForm}>
          <div className="Form-order">
            <label></label>
            <input type="text" placeholder="Order name" name="order_name" onChange={this.onChange} value={this.state.order_name}/>
          </div>
          <div className="Form-data">
            <label>Drug</label>
            <input type="text" name="med_name" onChange={this.onChange} value={this.state.med_name}/>
          </div>
          <div className="Form-data">
            <label>End Date </label>
            <input type="date" name="date" onChange={this.onChange} value={this.state.date}/>
          </div>
          <div className="Form-data">
            <label>Dosage </label>
            <input type="number" name="dosage" onChange={this.onChange} value={this.state.dosage}/>
          </div>
          <label className="Title-when">When
            <div className="When-checkbox">
              <label>
                <input type="checkbox" name="moment" id="morning" onChange={this.onChange} value={this.state.morning} />Morning
              </label>
              <label>
                <input type="checkbox" name="moment" id="midday" onChange={this.onChange} value={this.state.midday} />Midday
              </label>
              <label>
                <input type="checkbox" name="moment" id="evening" onChange={this.onChange} value={this.state.evening}/>Evening
              </label>
              <label>
                <input type="checkbox" name="moment" id="night" onChange={this.onChange} value={this.state.night}/>Night
              </label>
            </div>
          </label>
          <div className="Form-data">
            <button className="Button-confirm" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PrescriptionPage;
