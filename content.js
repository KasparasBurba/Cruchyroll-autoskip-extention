console.log("Extension loaded")

function skip(button) {
    if (button.getAttribute("aria-hidden") === "false") {
        setTimeout(() => {
            button.click()
        }, 2)
    }
}

const interval = setInterval(() => {
    const button = document.querySelector('[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]');

    if (button) {
        const label = button.getAttribute("aria-label")

        if (label === "Skip Recap") {
            chrome.storage.sync.get(["skipRecap"], (result) => {
                if (result.skipRecap) {
                    skip(button)
                }
            })
        }
    
        else if (label === "Skip Intro") {
            chrome.storage.sync.get(["skipIntro"], (result) => {
                if (result.skipIntro) {
                    skip(button)
                }
            })
        }
    
        else if (label === "Skip Credits") {
            chrome.storage.sync.get(["skipCredits"], (result) => {
                if (result.skipCredits) {
                    skip(button)
                }
            })
        }
    }
}, 1000)