

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
    const total = Number(priceInput.value) * Number(quantityInput.value)
    const tableText = document.createElement('tr');
    tableText.classList.add('item-total')
     tableText.innerHTML = ` <tr>
     <th >${nameInputValue}</th>
     <td>${priceInputValue}</td>
     <td>${quantityInputValue}</td>
     <td>${total}</td>
     </tr>` 
     const tableInfo = document.getElementById('info-table');
     tableInfo.appendChild(tableText);
     const subTotal = document.getElementById('sub-total');
     const previousSubTotal = subTotal.innerText;
     subTotal.innerText = total + Number(previousSubTotal);
     const tax = document.getElementById('tax');
     const previousTax = tax.innerText;
     const taxAmount = (total /100 )* 20 ;
     tax.innerText = taxAmount + Number(previousTax)
     const grandTotal = document.getElementById('grand-total');
     const previousGrandTotal = grandTotal.innerText
     grandTotal.innerText = total + taxAmount + Number(previousGrandTotal);
     

     nameInput.value = '';
     priceInput.value = '';
     quantityInput.value = '';
     




})