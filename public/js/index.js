window.web3 = new Web3(window.ethereum);
let currentAccount = null;



if (typeof window.ethereum !== 'undefined') {

ethereum.on("chainChanged" , () => window.location.reload());
ethereum.on('accountsChanged', () => window.location.reload());

let bolaccaunt = await web3.eth.getAccounts();

console.log(bolaccaunt[0]);

if (bolaccaunt.length === 0) {
// MetaMask is locked or the user has not connected any accounts
console.log('Please connect to MetaMask.');

$("#minttogleoff").css("display","block");
$("#minttogleon").css("display","none");


} else if (bolaccaunt[0] !== currentAccount) {
currentAccount = bolaccaunt[0];
$("#minttogleoff").css("display","none");
$("#minttogleon").css("display","block");
console.log('MetaMask is connected');
} 

document.getElementById("btn_meta").addEventListener("click", async () => {

    if (bolaccaunt.length === 0) {
    ethereum.request({ method: 'eth_requestAccounts' });
    }
    else
    {
    const permissions = await ethereum.request({
    method: 'wallet_requestPermissions',
    params: [{
    eth_accounts: {},
    }]
    });
}

    window.location.reload(); 
    
});

document.getElementById("minttogleoff").addEventListener("click", async () => {
console.log('Please connect to MetaMask.');
 alert("Please connect to MetaMask.");

});






console.log('MetaMask is installed!');

} 
else {
console.log('Please install Metamask!');


document.getElementById("btn_meta").addEventListener("click", async () => {
window.location.href = 'https://metamask.io/';
});



}

