import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux/";


 class DecreaseCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
       this.props.dispatch(decreaseCounter())
      }}>
       1 Azalt
      </button>
     )
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(decreaseCounter,dispatch)} //bindActionCreators action'u baglmamak için kul. redux fonksiyonu
                                                                //increaseCounter (redux/actions içerisindeki counterActions içinde yer alan increaseCounter çalıştırmak)
}
export default connect(mapDispatchToProps)(DecreaseCounter);
