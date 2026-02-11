const callHistoryData = [];
let heartTotal = 0;
let copyTotal = 0;


function getInnerTextNumber(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function handleCallTransaction(name, number) {
    
    const currentCoins = getInnerTextNumber("coin-count");

    if (currentCoins < 20) {
        alert("আপনার পর্যাপ্ত ব্যালেন্স নেই!");
        return;
    }

    setInnerText("coin-count", currentCoins - 20);

    // added history
    const historyEntry = {
        name: name,
        num: number,
        time: new Date().toLocaleTimeString()
    };
    callHistoryData.push(historyEntry);
    
    updateHistoryUI();
    alert("Calling " + name + "...");
}
    