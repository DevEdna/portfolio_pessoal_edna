function TabsSkillsHobbies() {
    const html = {
        links: [...document.querySelector('.tab-links').children],
        contents: [...document.querySelector('.tab-content').children],
        tabAbertaInicio: document.querySelector('[data-open]')
    }

    function esconderConteudoTabs() {
        html.contents.forEach(section => {
            section.style.display = "none"
        })

    }

    function removerClassesAtivas() {
        html.links.forEach(tab => {
            tab.className = tab.className.replace(" active", "")
        })

    }

    function mostrarConteudoTabs(id) {
        const conteudoTab = document.querySelector('#' + id)
        conteudoTab.style.display = "block"

    }

    function tabSelecionada(event) {
        esconderConteudoTabs()
        removerClassesAtivas()

        const idTitutoTab = event.currentTarget
        mostrarConteudoTabs(idTitutoTab.dataset.id)

        idTitutoTab.className += " active"
    }

    function capturarMudancas() {
        html.links.forEach(tab => {
            tab.addEventListener('click', tabSelecionada)
        })

    }

    function init() {
        esconderConteudoTabs()
        capturarMudancas()

        html.tabAbertaInicio.click()
    }

    return {
        init
    }
}

window.addEventListener('load', () => {
    const tabsNavegacao = TabsSkillsHobbies()
    tabsNavegacao.init()
})