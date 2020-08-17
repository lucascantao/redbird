const optBtn = document.querySelector('#app-header .options')

const options = document.querySelector('#app-options')

optBtn.addEventListener('click', () => {
    options.classList.toggle('hidden')
})