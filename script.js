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
    

function updateHistoryUI() {
    const container = document.getElementById("call-history-container");
    container.innerHTML = "";

    //loop for history
    for (const item of [...callHistoryData].reverse()) {
        const div = document.createElement("div");
        div.className = "bg-[#f9f9f9] p-3 rounded-xl flex justify-between items-center border border-gray-50";
        div.innerHTML = `
            <div>
                <h1 class="font-bold text-sm text-gray-700">${item.name}</h1>
                <p class="text-xs text-gray-400">${item.num}</p>
            </div>
            <p class="text-[10px] text-gray-500 font-mono">${item.time}</p>
        `;
        container.appendChild(div);
    }

}


window.onload = function() {
    
    // Services Data for listeners
    const servicesData = [
        { id: 1, name: "জাতীয় জরুরি সেবা", num: "999" },
        { id: 2, name: "পুলিশ", num: "999" },
        { id: 3, name: "ফায়ার সার্ভিস", num: "999" },
        { id: 4, name: "অ্যাম্বুলেন্স", num: "1994-999999" },
        { id: 5, name: "নারী ও শিশু সহায়তা", num: "109" },
        { id: 6, name: "দুদক", num: "106" },
        { id: 7, name: "বিদ্যুৎ বিভ্রাট", num: "16216" },
        { id: 8, name: "ব্র্যাক", num: "16445" },
        { id: 9, name: "বাংলাদেশ রেলওয়ে", num: "163" }
    ];

    servicesData.forEach(service => {
        
        // Call Buttons
        document.getElementById(`call-btn-${service.id}`).addEventListener("click", function() {
            handleCallTransaction(service.name, service.num);
        });

        // Copy Buttons
        document.getElementById(`copy-btn-${service.id}`).addEventListener("click", function() {
            navigator.clipboard.writeText(service.num);
            copyTotal++;
            setInnerText("copy-count", copyTotal);
        });

        // Heart Icons
        document.getElementById(`heart-${service.id}`).addEventListener("click", function() {
            heartTotal++;
            setInnerText("heart-count", heartTotal);
            // Visual toggle
            this.classList.toggle('fa-regular');
            this.classList.toggle('fa-solid');
            this.classList.toggle('text-red-500');
        });
    });

    document.getElementById("clear-history-btn").addEventListener("click", function() {
        callHistoryData.length = 0;
        updateHistoryUI();
    });

}