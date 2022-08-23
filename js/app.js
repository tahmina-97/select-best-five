const playerArr = [];

// display the selected players
function displayPlayer(players){
    const listBody = document.getElementById('list-items');
    listBody.innerHTML= '';

    for(let player of players){
        const li = document.createElement('li');
        li.innerHTML = `${player}`;
        listBody.appendChild(li);
    }
}


// when select buttons clicked

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
    document.getElementById('players-number').innerText = playerArr.length;
    displayPlayer(playerArr);
}


// when calculate button clicked

document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerCost = getFieldvalueById('cost-per-player');
    const playerNumber = document.getElementById('list-items').childElementCount;
    if(perPlayerCost === 'failed'){
        return;
    }
    else if(playerNumber === 0){
        alert('You have to select atleast 1 player');
    }
    else{
        const playerExpense = perPlayerCost * playerNumber;
        setElementById('player-expense', playerExpense);
    }
    
});


//when calculate total button clicked 

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const playerExpenses = getElementValueById('player-expense');
    const managerCost = getFieldvalueById('cost-manager');
    const coachCost = getFieldvalueById('cost-coach');
    if(managerCost === 'failed' || coachCost === 'failed' || playerExpenses === 'failed'){
        return;
    }
    else{
        const totalExpense = playerExpenses + managerCost + coachCost ;
        setElementById('total-expense', totalExpense);

    }
});