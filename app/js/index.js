const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://graalopt.ru/wp-content/uploads/2020/07/yabloko-krasnoe.jpg'},
    {id: 1, title: 'Апельсины', price: 60, img: 'https://png.rinvik.ru/files/Tri-apelsina-s-dvumya-dolkami-i-listyami.png'},
    {id: 1, title: 'Манго', price: 80, img: 'https://sc01.alicdn.com/kf/UTB8ADJqXJnJXKJkSaiyq6AhwXXae/736416451/UTB8ADJqXJnJXKJkSaiyq6AhwXXae.jpg'}
]
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
