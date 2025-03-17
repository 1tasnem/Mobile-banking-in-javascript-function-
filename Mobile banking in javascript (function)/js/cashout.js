document.getElementById('btn-cash-out').addEventListener('click',function(event)
{
   event.preventDefault();
   ///console.log('okkkk');
   const cashOut = getInputFieldValueById('input-cash-out');
   const pinNumber = getInputFieldValueById('input-cash-out-pin');
  // console.log(cashOut,pinNumber);
  if(isNaN(cashOut))
  {
   alert('Failed to cash out');
   return;
  }
   if(pinNumber === 1234 )
   {

    const balance = getTextIdValueById ('account-balance');
    //console.log(balance);
    if(cashOut > balance)
    {
      alert('No money No honey')
      return;
    }
    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;
    //add to transaction history;
    const div = document.createElement('div');
   div.classList.add('bg-yellow-300')
   div.innerHTML = `
   <h4 class ="text-2xl font-bold">Cash Out</h4>
   <p>${cashOut} withdraw . New Balance ${newBalance}</p>
   `
   document.getElementById('transaction-container').appendChild(div);
   
   }
   else{
    alert('No money for withdraw')
   }
})