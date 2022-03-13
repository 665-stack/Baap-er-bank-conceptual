//Deposit ========
let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');
//Withdraw ========
let withdrawValue = document.getElementById('withdraw-value');
let withdrawOutput = document.getElementById('withdraw-output');
//Total Balance ========
let balanceOutput = document.getElementById('balance-output');

function addMoney(currentAmount, newAmount) {
    return Number(currentAmount) + Number(newAmount);
}
function getMoney(currentAmount, newAmount) {
    return Number(currentAmount) - Number(newAmount);
}

function deposit() {
    //withdraw
    const totalDeposit = addMoney(depositOutput.innerText, depositValue.value)
    depositOutput.innerText = totalDeposit;
    //balance
    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
    balanceOutput.innerText = totalBalance;
    //input cleaner
    depositValue.value = '';
}
function withdraw() {
    //withdraw
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value)
    withdrawOutput.innerText = totalWithdraw;
    //balance
    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value)
    balanceOutput.innerText = totalBalance;
    //input clearner
    withdrawValue.value = '';
}