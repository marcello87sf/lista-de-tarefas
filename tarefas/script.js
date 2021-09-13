const elementolista=document.querySelector('ul')
const elementoinput= document.querySelector('input')
const elementobotao= document.querySelector('button')
const tarefas= []
    
    


function mostratarefas() {
    elementolista.innerHTML= ''

    for (tarefa of tarefas) {
        const elementotarefa = document.createElement('li')
        const textotarefa=document.createTextNode (tarefa)

        const elementolink = document.createElement('a')
        const pos= tarefas.indexOf(tarefa)

        const linktext = document.createTextNode('x')
        elementolink.appendChild(linktext)
        elementolink.setAttribute('href','#')

        elementolink.setAttribute('onclick',`deletatarefa(${pos})`)


        elementotarefa.appendChild(textotarefa)
        elementolista.appendChild(elementotarefa)
        elementotarefa.appendChild(elementolink)


    }

}
mostratarefas()

function addtarefa() {
    const textotarefa= elementoinput.value
    tarefas.push(textotarefa)
    elementoinput.value= ''
    mostratarefas()
}
elementobotao.setAttribute('onclick','addtarefa()')

function deletatarefa (pos) {
    tarefas.splice(pos,1)
    mostratarefas()
}