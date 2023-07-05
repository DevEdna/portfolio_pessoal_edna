function TabsEducacaoQualificacao() {
    const html = {
        titulos: [...document.querySelector('.tabs-titulos').children],
        conteudos: [...document.querySelector('.conteudo-formacao-experiencia').children],
        tabAbertaInicio: document.querySelector('[data-aberto]')
    }

    function esconderConteudoTabs() {
        html.conteudos.forEach(section => {
            section.style.display = "none"
        })

    }

    function removerClassesAtivas() {
        html.titulos.forEach(tab => {
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
        html.titulos.forEach(tab => {
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
    const tabsNavegacao = TabsEducacaoQualificacao()
    tabsNavegacao.init()
})