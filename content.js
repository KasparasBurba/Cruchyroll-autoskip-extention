let button

const skipButtonSelector = '[aria-label="Skip Recap"], [aria-label="Skip Intro"], [aria-label="Skip Credits"]'

const settingMap = {
    "Skip Recap": "skipRecap",
    "Skip Intro": "skipIntro",
    "Skip Credits": "skipCredits"
}

function observeCurrentButton(button) {
    observer.disconnect()

    observer.observe(button, {
        attributes: true,
        attributeFilter: ["aria-hidden"]
    })
}

function skip(button) {
    if (button.getAttribute("aria-hidden") === "false") {
        setTimeout(() => {
            button.click()

            setTimeout(() => {
                checkForSkipButton()
            }, 30)
        }, 2)
    }
}

function checkForSkipButton() {
    button = document.querySelector(skipButtonSelector)

    if (button) {
        observeCurrentButton(button)

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
    button = document.querySelector(skipButtonSelector)

    if(button) {
        clearInterval(finder)
        observeCurrentButton(button)
        checkForSkipButton()
    }
}, 30)