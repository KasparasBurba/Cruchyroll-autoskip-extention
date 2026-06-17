let button

const settingMap = {
    "Skip Recap": "skipRecap",
    "Skip Intro": "skipIntro",
    "Skip Credits": "skipCredits"
}

function skip(button) {
    button = document.querySelector('[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]')

    if (button.getAttribute("aria-hidden") === "false") {
        setTimeout(() => {
            button.click()

            setTimeout(() => {
                checkForSkipButton()
            }, 30)
        }, 2)
    }
}

function checkForSkipButton(button) {
    button = document.querySelector('[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]')

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
}

const observer = new MutationObserver(() => {
    if (button && button.getAttribute("aria-hidden") === "false") {
        checkForSkipButton()
    }
})

const finder = setInterval (() => {
    button = document.querySelector('[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]')

    if(button) {
        clearInterval(finder)

        observer.observe(button, {
            attributes: true,
            attributeFilter: ["aria-hidden"]
        })
    }
}, 30)