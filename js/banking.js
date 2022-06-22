document.getElementById('increase').addEventListener('click', function() {

    
    //display total balance
    const blanceTotal = document.getElementById('display');
    const previousBlanceText = blanceTotal.innerText;
    const previousBlanceAmount = parseFloat(previousBlanceText);
    const newBlanceTotal = previousBlanceAmount + 1;
    blanceTotal.innerText = newBlanceTotal;
})
document.getElementById('dicrease').addEventListener('click', function() {

    
    //display total balance
    const blanceTotal = document.getElementById('display');
    const previousBlanceText = blanceTotal.innerText;
    const previousBlanceAmount = parseFloat(previousBlanceText);
    const newBlanceTotal = previousBlanceAmount - 1;
    blanceTotal.innerText = newBlanceTotal;
})

document.getElementById('ac').addEventListener('click', function() {

    
    //display total balance
    const blanceTotal = document.getElementById('display');
    blanceTotal.innerText = 0;
})

