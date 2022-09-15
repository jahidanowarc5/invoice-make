

document.getElementById('submit-btn').addEventListener('click',function(){
    const textInput = document.getElementById('text-field');
    const textInputValue = textInput.value;
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = textInputValue;
    textInput.value = '';
    
});
