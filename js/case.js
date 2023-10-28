document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const prevCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = prevCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})