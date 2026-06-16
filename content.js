console.log("Extension loaded");
let alreadySkipped = false;
const interval = setInterval(() =>{
const button = document.querySelector('[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]');
if (button){
if (button.getAttribute("aria-label") === "Skip Recap"){
    chrome.storage.sync.get(["skipRecap"], (result) =>{
        if(result.skipRecap === true){
            if (alreadySkipped === false){
                if (button.getAttribute("aria-hidden") === "false"){
                    console.log("Button found,visible");
                    console.log(button.getAttribute("aria-label"));
                    console.log(button.getAttribute("aria-hidden"));
                    const time1 = setTimeout(() =>{
                    button.click();
                    console.log("Skipped");
                    //alreadySkipped = true;
                    },150);
                }
            }else {
                console.log("Already skipped")
            }
        } else {
            console.log("Skip Recap is unchecked")
        }
    });
}
if (button.getAttribute("aria-label") === "Skip Intro"){
    chrome.storage.sync.get(["skipIntro"], (result) =>{
        if(result.skipIntro === true){
            if (alreadySkipped === false){
                if (button.getAttribute("aria-hidden") === "false"){
                    console.log("Button found,visible");
                    console.log(button.getAttribute("aria-label"));
                    console.log(button.getAttribute("aria-hidden"));
                    const time1 = setTimeout(() =>{
                    button.click();
                    console.log("Skipped");
                    //alreadySkipped = true;
                    },150);
                }
            }else {
                console.log("Already skipped")
            }
        } else {
            console.log("Skip Intro is unchecked")
        }
    });
}
if (button.getAttribute("aria-label") === "Skip Credits"){
    chrome.storage.sync.get(["skipCredits"], (result) =>{
        if(result.skipCredits === true){
            if (alreadySkipped === false){
                if (button.getAttribute("aria-hidden") === "false"){
                    console.log("Button found,visible");
                    console.log(button.getAttribute("aria-label"));
                    console.log(button.getAttribute("aria-hidden"));
                    const time1 = setTimeout(() =>{
                    button.click();
                    console.log("Skipped");
                    //alreadySkipped = true;
                    },150);
                }
            }else {
                console.log("Already skipped")
            }
        } else {
            console.log("Skip Credits is unchecked")
        }
    });
};
} else {
    alreadySkipped = false;
    console.log("Searching...");
}
},1000);