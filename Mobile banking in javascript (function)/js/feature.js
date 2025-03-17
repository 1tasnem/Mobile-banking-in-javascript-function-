

  document.getElementById('btn-show-add-money').addEventListener('click' , function()
{
    //console.log('show');
    showSectionById('add-money-form');
})


document.getElementById('btn-show-cash-out').addEventListener('click' , function()
{
    //console.log('show');
    showSectionById('cash-out-form');
})

document.getElementById('btn-show-transactions').addEventListener('click',function()
{
  showSectionById('transaction-section');
})