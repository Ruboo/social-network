export const requiredField = (value) => {
    if(!value) return 'Field is required'
}


export const maxLengthCreator = (maxLength) => (value)=> {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
}