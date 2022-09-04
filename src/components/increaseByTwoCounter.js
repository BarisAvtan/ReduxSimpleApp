import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux/";

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
       this.props.dispatch(increaseByTwoCounter())
      }}>
       2 Arttır
      </button>
     )
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(increaseByTwoCounter,dispatch)} //bindActionCreators action'u baglmamak için kul. redux fonksiyonu
                                                                //increaseCounter (redux/actions içerisindeki counterActions içinde yer alan increaseCounter çalıştırmak)
}
export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
