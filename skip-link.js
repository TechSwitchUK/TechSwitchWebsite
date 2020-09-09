document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    const skipLink = document.getElementById('skip-link')
    const mainContent = document.getElementById('maincontent')
    console.log(skipLink)
    console.log(mainContent)
    if (skipLink && mainContent) {
        skipLink.addEventListener('click', (event) => {
            event.preventDefault()
            mainContent.setAttribute('tabIndex', '-1')
            mainContent.focus()
        })
        mainContent.addEventListener('blur', (event) => {
            event.preventDefault()
            mainContent.removeAttribute('tabIndex')
        })
    }
})
