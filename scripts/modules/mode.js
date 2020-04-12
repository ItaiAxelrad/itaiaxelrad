const body = document.querySelector('body')
const toggleBtn = document.querySelector('#schemeBtn')
// toggle button event listener
toggleBtn.addEventListener('click', () => {
    // check the user's preferred color scheme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.toggle('scheme-light')
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        body.classList.toggle('scheme-dark')
    } else if (window.matchMedia('(prefers-color-scheme: no-preference)').matches) {
        body.classList.toggle('scheme-dark')
    }
    //localStorage.setItem('mode', 'dark')
})

//export module
export {
    body,
    toggleBtn
}