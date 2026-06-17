const recap = document.getElementById("recap")
const intro = document.getElementById("intro")
const credits = document.getElementById("credits")
const all = document.getElementById("all")

function updateAllCheckbox () {
    all.checked = recap.checked && intro.checked && credits.checked
}

chrome.storage.sync.get(["skipRecap", "skipIntro", "skipCredits"], (result) => {
    recap.checked = result.skipRecap ?? true
    intro.checked = result.skipIntro ?? true
    credits.checked = result.skipCredits ?? true

    updateAllCheckbox()
})

all.addEventListener("change", () => {
    recap.checked = all.checked
    intro.checked = all.checked
    credits.checked = all.checked

    chrome.storage.sync.set({
        skipRecap: all.checked,
        skipIntro: all.checked,
        skipCredits: all.checked
    })
})

recap.addEventListener("change", () => {
    updateAllCheckbox()

    chrome.storage.sync.set({
        skipRecap: recap.checked
    })
})

intro.addEventListener("change", () => {
    updateAllCheckbox()

    chrome.storage.sync.set({
        skipIntro: intro.checked
    })
})

credits.addEventListener("change", () => {
    updateAllCheckbox()

    chrome.storage.sync.set({
        skipCredits: credits.checked
    })
})