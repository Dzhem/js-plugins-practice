const myModal = $.modal({
    title: 'Заголовок',
    content: `
        <p>Это окошко прекрасно!</p>
    `,
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clocked')
            myModal.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clocked')
            myModal.close()
        }}
    ]
})

myModal.open()
