function skip(button) {
    if (button.getAttribute("aria-hidden") === "false") {
        setTimeout(() => {
            button.click()
        }, 2)
    }
}

const settingMap = {
    "Skip Recap": "skipRecap",
    "Skip Intro": "skipIntro",
    "Skip Credits": "skipCredits"
}

const interval = setInterval(() => {
    const button = document.querySelector('[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]');

    if (button) {
        const label = button.getAttribute("aria-label")
        const settingName = settingMap[label]

        if (settingName) {
            chrome.storage.sync.get([settingName], (result) => {
                if (result[settingName]) {
                    skip(button)
                }
            })
        }
    }
}, 150)