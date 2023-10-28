function getTextElement(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalString);
    return currentPhoneTotal;
}

function setTextElementByValue (elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElement('phone-total')
    const currentCaseTotal = getTextElement('case-total'); 
    //--------------------------------------------- 
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementByValue('sub-total', currentSubTotal);
    //---------------------------------------------
    const taxAmountString = (currentSubTotal * 0.05).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementByValue('tax-amount', taxAmount);
    //---------------------------------------------
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementByValue('final-total', finalAmount);
}