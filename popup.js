console.log("popup loaded");

chrome.storage.sync.get(["skipRecap"], (result) =>{
    recap.checked = result.skipRecap;
    console.log(result.skipRecap);
});

chrome.storage.sync.get(["skipIntro"], (result) =>{
    intro.checked = result.skipIntro;
});

chrome.storage.sync.get(["skipCredits"], (result) =>{
    credits.checked = result.skipCredits;
});

const recap = document.getElementById("recap");
recap.addEventListener("change", () => {
    console.log("Recap changed");
    chrome.storage.sync.set({
        skipRecap: recap.checked
    });
});

const intro = document.getElementById("intro");
intro.addEventListener("change", () => {
    console.log("Intro changed");
    chrome.storage.sync.set({
        skipIntro: intro.checked
    });
});

const credits = document.getElementById("credits");
credits.addEventListener("change", () => {
    console.log("Credits changed");
    chrome.storage.sync.set({
        skipCredits: credits.checked
    });
});