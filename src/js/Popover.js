export default class Popover{
    constructor(){
        this._popovers = []
    }

    setPopover(message, elem){
        const popover = document.createElement('div')
        popover.innerHTML = `<div class="tooltip">
        <div class="tooltip_title"></div>
        <div class="tooltip_content"></div>
        </div>`
        popover.querySelector('.tooltip_title').innerText = message.title
        popover.querySelector('.tooltip_content').innerText = message.content

        // const id = performance.now()
        this._popovers.push({
            // id,
            elem,
            popover
        })

        elem.addEventListener('click', ()=> {
            document.body.appendChild(popover) 
        })
        

        // return id
    }
}