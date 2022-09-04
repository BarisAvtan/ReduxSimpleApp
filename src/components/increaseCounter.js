import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux/";

 class IncreaseCounter extends Component {
  render() {
    return (
     <button onClick={e=>{
      this.props.dispatch(increaseCounter())
     }}>
      1 Arttır
     </button>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(increaseCounter,dispatch)} //bindActionCreators action'u baglmamak için kul. redux fonksiyonu
                                                                //increaseCounter (redux/actions içerisindeki counterActions içinde yer alan increaseCounter çalıştırmak)
}
export default connect(mapDispatchToProps)(IncreaseCounter);