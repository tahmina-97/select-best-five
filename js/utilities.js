function getFieldvalueById(inputId){
    const getInputField = document.getElementById(inputId);
    const fieldValueStr = getInputField.value;
    const fieldValue = parseFloat(fieldValueStr);
    if(isNaN(fieldValueStr)){
        alert('Input cannot be other than number');
        return 'failed';
       }
       else if(fieldValueStr.length === 0){
        alert('Input Field cannot remain empty');
        return 'failed';
       }
       else if(fieldValue < 0){
        alert('Input value cannot be a negative number');
        return 'failed';
       }
    return fieldValue;
}
function getElementValueById(elementId){
    const getElement = document.getElementById(elementId);
    const getElementStr = getElement.innerText;
    const getElementValue = parseFloat(getElementStr);
    if(getElementStr.length === 0){
        alert('Yoy have to calculate the Player Expense first');
        return 'failed';
    }
    return getElementValue;
}

function setElementById(elementId, value){
    const getElement = document.getElementById(elementId);
    getElement.innerText= value;

}