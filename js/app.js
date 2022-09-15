

document.getElementById('submit-btn').addEventListener('click',function(){
    const textInput = document.getElementById('text-field');
    const textInputValue = textInput.value;
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = textInputValue;
    textInput.value = '';
    
});

document.getElementById('add-btn').addEventListener('click',function(){
    const nameInput = document.getElementById('name-input');
    const priceInput = document.getElementById('price-input');
    const quantityInput = document.getElementById('quantity-input');
    const nameInputValue = nameInput.value;
    const priceInputValue = priceInput.value;
    const quantityInputValue = quantityInput.value;
    console.log(nameInputValue,priceInputValue,quantityInputValue)
    const tableText = document.createElement('tr');
    tableText.classList.add('item-total')
     tableText.innerHTML = ` <tr>
     <th >${nameInputValue}</th>
     <td>${priceInputValue}</td>
     <td>${quantityInputValue}</td>
     <td></td>
     </tr>` 
     const tableInfo = document.getElementById('info-table');
     tableInfo.appendChild(tableText);




})