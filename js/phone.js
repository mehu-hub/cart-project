function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const prevPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = prevPhoneNumber + 1
    }
    else{
        newPhoneNumber = prevPhoneNumber - 1
    }
    phoneNumberField.value = newPhoneNumber
    return newPhoneNumber;  
}

function updatePhoneTotalPrice (newPhoneNumber){
    const phoneTotalNumber = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalNumber;
}
//-----------------------------------------------------
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true) 
    updatePhoneTotalPrice(newPhoneNumber)
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber)  
})