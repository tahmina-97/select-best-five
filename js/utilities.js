function getFieldvalueById(inputId){
    const getInputField = document.getElementById(inputId);
    const getInputFieldValue = parseFloat(getInputField.value);
    return getInputFieldValue;
}
function getElementValueById(elementId){
    const getElement = document.getElementById(elementId);
    const getElementValue = parseFloat(getElement.value);
    return getElementValue;
}

function setElementById(elementId, value){
    const getElement = document.getElementById(elementId);
    getElement.innerText= value;

}