document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAdd = document.getElementById('deposit-add');
    const depositAddValue = depositAdd.innerText;
    const depositAddStr = parseFloat(depositAddValue);
    // deposit balance string to number convert abov

    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmount.value;
    const depositAmountStr = parseFloat(depositAmountValue);
    // deposit amount string to number convert abov 

    const mainBalance = document.getElementById('main-balance');
    const mainBalanceValue = mainBalance.innerText;
    const mainBalanceStr = parseFloat(mainBalanceValue);
    // main balance string to number convert abov 

    const depositTotalAmount = depositAddStr + depositAmountStr;
    depositAdd.innerText = depositTotalAmount;
    // deposit amount add 

    const totalMainBalance = depositAmountStr + mainBalanceStr;
    mainBalance.innerText = totalMainBalance;
    // main balance add amount 

    depositAmount.value = '';
    // deposit input empty 
})
// deposit button function abov

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceValue = withdrawBalance.innerText;
    const withdrawBalanceStr = parseFloat(withdrawBalanceValue);
    // wihtdraw balance string to number convert abov 

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValue = withdrawAmount.value;
    const withdrawAmountStr = parseFloat(withdrawAmountValue);
    // withdraw amount string to number convert abov

    const mainBalance = document.getElementById('main-balance');
    const mainBalanceValue = mainBalance.innerText;
    const mainBalanceStr = parseFloat(mainBalanceValue);
    // main balance string to number convert abov

    const totalWithdraw = withdrawBalanceStr + withdrawAmountStr;
    withdrawBalance.innerText = totalWithdraw;
    // total withdraw add 

    const availableBalance = mainBalanceStr - withdrawAmountStr;
    mainBalance.innerText = availableBalance;
    // substraction from main balance 

    withdrawAmount.value = '';
    // withdraw input empty 
})