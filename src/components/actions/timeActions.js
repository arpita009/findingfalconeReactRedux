export const startTimeCalculate =(timeCalculateInput) =>{
    return{
        type: 'TIME_CALCULATOR',
        payload: timeCalculateInput
    }
}
export const startResetTimer=() =>{
    return{
        type: 'RESET_TIMER'
    }
}