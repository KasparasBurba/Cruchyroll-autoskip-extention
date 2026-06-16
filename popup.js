const recap = document.getElementById("recap");
const intro = document.getElementById("intro");
const credits = document.getElementById("credits");

chrome.storage.sync.get(["skipRecap"], (result) =>{
    recap.checked = result.skipRecap;
});

chrome.storage.sync.get(["skipIntro"], (result) =>{
    intro.checked = result.skipIntro;
});

chrome.storage.sync.get(["skipCredits"], (result) =>{
    credits.checked = result.skipCredits;
});

recap.addEventListener("change", () => {
    chrome.storage.sync.set({
        skipRecap: recap.checked
    });
});

intro.addEventListener("change", () => {
    chrome.storage.sync.set({
        skipIntro: intro.checked
    });
});

credits.addEventListener("change", () => {
    chrome.storage.sync.set({
        skipCredits: credits.checked
    });
});