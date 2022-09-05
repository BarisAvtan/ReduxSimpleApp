import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseByValue } from "../redux/actions/counterActions";
import { connect } from "react-redux/";

class AddValue extends Component {
    
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    this.props.dispatch(increaseByValue(this.state.value));
    event.preventDefault();
  }

  render() {
    return (
      <>
        <label>
          Artış Miktarı
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseByValue(parseInt(this.state.value)));
          }}
        >
          Arttır
        </button>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByValue, dispatch) }; //bindActionCreators action'u baglmamak için kul. redux fonksiyonu
  //increaseCounter (redux/actions içerisindeki counterActions içinde yer alan increaseCounter çalıştırmak)
}
export default connect(mapDispatchToProps)(AddValue);
