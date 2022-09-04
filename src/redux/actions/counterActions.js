import * as actionTypes from "./actionTypes";

//örneğin birisi increaseCounter fonk. çagırırsa 1 gönderiyoruz increaseByTwoCounter'ı çağırırsa 2 gönderiyoruz.

export const increaseCounter=()=>({
    type : actionTypes.INCREASE_COUNTER,
    payload :1
})


export const decreaseCounter=()=>({
    type : actionTypes.DECREASE_COUNTER,
    payload :1
})

export const increaseByTwoCounter=()=>({
    type : actionTypes.INCREASE_BY_TWO_COUNTER,
    payload :2
})
