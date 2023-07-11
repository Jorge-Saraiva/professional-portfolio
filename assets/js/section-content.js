const sectionContentTriggler = document.querySelectorAll('.section-content .triggler')

sectionContentTriggler.forEach((triggler) => {
    triggler.addEventListener('click', () => {
        const sectionContent = triggler.parentElement

        sectionContent.classList.toggle('open')
    })
})

