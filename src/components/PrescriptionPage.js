import React from "react";
import Axios from "axios";
import "./PrescriptionPage.css";
import Logo from "./Logo";
import SelectPatientList from "./SelectPatientList";
import Nav from './Nav'

class PrescriptionPage extends React.Component {
  state = {
    patient_id: 0,
    doctor_id: 0,
    order_name: "",
    med_name: "",
    date: "",
    dosage: 0,
    morning: false,
    midday: false,
    evening: false,
    night: false,
  };

  componentDidMount() {
    this.setState({ doctor_id: this.props.location.data.doctor_id })
  }

  // componentDidUpdate() {
  //   this.setState({ doctor_id: this.props.location.data.doctor_id })
  // }

  onChange = (e) => {
    if (e.target.name === "Patients") {
      if (e.target.value !== "Please select a patient") {
        this.setState({ patient_id: e.target.value })
      } else {
        this.setState({ patient_id: 0 });
      }
    } else if (e.target.name !== "moment") {
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
      .then(res => {
        this.setState({
          order_name: "",
          med_name: "",
          date: "",
          dosage: 0,
          morning: false,
          midday: false,
          evening: false,
          night: false,
        })
      })
      .catch((err) => console.log(err));
  };
  render() {
    const doctor_id = this.props.location.data.doctor_id
    return (
      <div className="PrescriptionPage-container">
        <Logo />
        <h1 className="Prescription-title">Prescription</h1>

        <form className="PrescriptionPage-form" onSubmit={this.submitForm}>
          <SelectPatientList
            handleChange={this.onChange}
            doctor_id={doctor_id}
            all
          />
          <div className="Form-order">
            <label></label>
            <input
              className="Form-order-input"
              type="text"
              placeholder="Order name"
              name="order_name"
              onChange={this.onChange}
              value={this.state.order_name}
            />
          </div>
          <div className="Form-data">
            <label>Drug</label>
            <input
              className="PrescriptionPage-form-input"
              type="text"
              name="med_name"
              onChange={this.onChange}
              value={this.state.med_name}
            />
          </div>
          <div className="Form-data">
            <label>End Date </label>
            <input
              className="PrescriptionPage-form-input"
              type="date"
              name="date"
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
          <div className="Form-data">
            <label>Dosage </label>
            <input
              className="PrescriptionPage-form-input"
              type="number"
              name="dosage"
              onChange={this.onChange}
              value={this.state.dosage}
            />
          </div>
          <label className="Title-when">
            When
            <div className="When-checkbox">
              <label>
                <input
                  type="checkbox"
                  name="moment"
                  id="morning"
                  onChange={this.onChange}
                  value={this.state.morning}
                  checked={this.state.morning}
                />
                Morning
              </label>
              <label>
                <input
                  type="checkbox"
                  name="moment"
                  id="midday"
                  onChange={this.onChange}
                  value={this.state.midday}
                  checked={this.state.midday}
                />
                Midday
              </label>
              <label>
                <input
                  type="checkbox"
                  name="moment"
                  id="evening"
                  onChange={this.onChange}
                  value={this.state.evening}
                  checked={this.state.evening}
                />
                Evening
              </label>
              <label>
                <input
                  type="checkbox"
                  name="moment"
                  id="night"
                  onChange={this.onChange}
                  value={this.state.night}
                  checked={this.state.night}
                />
                Night
              </label>
            </div>
          </label>
          <div className="Form-data">
            <button className="Button-confirm" type="submit">
              PRESCRIBE
            </button>
          </div>
        </form>

      <footer>
          <Nav doctor_id={doctor_id} />
      </footer>
      </div>
    );
  }
}

export default PrescriptionPage;
