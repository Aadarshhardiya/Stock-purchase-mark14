const initialPrice = document.querySelector("#initial-price")
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#current-price")
const checkBtn = document.querySelector("#check-btn")
const output = document.querySelector("#output")

function calculateProfitAndLoss(initial, quantity, current){
  
  
if (initial > current) {
        var loss = (initial-current) * quantity;
        var lossPercentage = (loss/initial) * 100

        output.innerText=("your loss is " + (loss) + " and your loss percentage is " + lossPercentage);
    }
    else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        
        output.innerText=("your profit is " + (profit) + " and your profit percentage is " + profitPercentage);
    }
    else{
         output.innerText=("No pain No gain")
    }

}

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(quantity.value);
    var curr = Number(currentPrice.value);
    if(ip && qty && curr)
    calculateProfitAndLoss(ip, qty, curr);
    else 
    output.innerText=("Required parametres missing!");
}



checkBtn.addEventListener("click", submitHandler);

