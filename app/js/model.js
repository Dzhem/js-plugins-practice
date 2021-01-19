$.modal = function (options) {
    function _createModal(options) {
        const defaultWidth = '600px'
        const modal = document.createElement('div')
        modal.classList.add('my-modal')
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay">
                <div class="modal-window" style="width: ${options.width || defaultWidth};">
                    <div class="modal-header">
                        <span class="modal-title">${options.title || 'Окно'}</span>
                        ${options.closable ? `<span class="modal-close">&times;</span>` : ''}
                    </div>
                    <div class="modal-body">
                        ${options.content || ''}
                    </div>
                    <div class="modal-footer">
                        <button>OK</button><button>Cancel</button>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal
    }
    
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false

    return {
        open () {
            !closing && $modal.classList.add('open')
        },
        close () {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy () {
            $modal.remove()
        }
    }
}