console.log("Extension loaded");
const interval = setInterval(() =>{
const button = document.querySelector('[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]');
if (button){
if (button.getAttribute("aria-label") === "Skip Recap"){
    chrome.storage.sync.get(["skipRecap"], (result) =>{
        if(result.skipRecap === true){
            if (button.getAttribute("aria-hidden") === "false"){
                const time = setTimeout(() =>{
                    button.click();
                },150);
            }
        
        }
    });
}
if (button.getAttribute("aria-label") === "Skip Intro"){
    chrome.storage.sync.get(["skipIntro"], (result) =>{
        if(result.skipIntro === true){
            if (button.getAttribute("aria-hidden") === "false"){
                const time = setTimeout(() =>{
                    button.click();
                },150);
            }
        }
    });
}
if (button.getAttribute("aria-label") === "Skip Credits"){
    chrome.storage.sync.get(["skipCredits"], (result) =>{
        if(result.skipCredits === true){
            if (button.getAttribute("aria-hidden") === "false"){
                const time = setTimeout(() =>{
                    button.click();
                },150);
            }
        }
    });
};
}
},1000);