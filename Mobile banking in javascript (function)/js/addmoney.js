document.getElementById('btn-add-money')
.addEventListener('click',function(event)
{
    event.preventDefault();
    //getInputFieldValueById();
    //const addMoney = getInputFieldValueById();
    //console.log(addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
   const pinNumber = getInputFieldValueById('input-pin-number');
   if(isNaN(addMoney))
   {
    alert('Failed to add Money');
    return;
   }
    //console.log(pinNumber);
    if(pinNumber === 1234)
    {
        const balance = getTextIdValueById('account-balance');
        //console.log(balance);
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        //add transaction history;
        const p = document.createElement('p');
        p.innerText = `Added:${addMoney} TK Newbalance :${newBalance}`.
        //should be a common function

        document.getElementById('transaction-container').appendChild(p);


    }
    else{
        alert('Failed to add the money');
    }
   


})