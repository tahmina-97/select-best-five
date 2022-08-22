
const playerArr = [];

function displayPlayer(players){
    const listBody = document.getElementById('list-items');
    listBody.innerHTML= '';

    for(let player of players){
        const li = document.createElement('li');
        li.innerHTML = `${player}`;
        listBody.appendChild(li);
    }
}

function selectToAdd(element){

    const playerName = element.parentNode.parentNode.children[0].innerText;
    

    playerArr.push(playerName);
    const playerNumber = playerArr.length;
    if(playerNumber > 5){
        alert("You can't add more than 5 players");
        playerArr.pop();
    }
    else{
        element.classList.add('btn-disabled');
    }
    displayPlayer(playerArr);
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerCost = getFieldvalueById('cost-per-player');
    const playerNumber = document.getElementById('list-items').childElementCount;
    const playerExpense = perPlayerCost * playerNumber;
    setElementById('player-expense', playerExpense);
});

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const playerExpenses = getElementValueById('player-expense');
    const managerCost = getFieldvalueById('cost-manager');
    const coachCost = getFieldvalueById('cost-coach');
    const totalExpense = playerExpenses + managerCost + coachCost ;
    setElementById('total-expense', totalExpense);

})