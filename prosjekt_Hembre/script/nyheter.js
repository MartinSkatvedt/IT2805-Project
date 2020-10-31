function writeNews() {
    const main = document.querySelector('main')
    const newsContainer = document.createElement('div')
    newsContainer.id = 'news-container'
    for (let i = 0; i < news.length; i++) {
        const element = news[i];
        const newsDiv = document.createElement('div')
        newsDiv.id = 'news-div'

        const header = document.createElement('h2')
        header.innerHTML = element.header
        header.id = element.id

        const img = document.createElement('img')
        img.src = element.img
        img.id = 'news-img'

        const textDiv = document.createElement('div')
        textDiv.id = 'textbox'
        
        textDiv.appendChild(header)
        for (const paragraph of element.text) {
            const p = document.createElement('p')
            p.innerHTML = paragraph
            textDiv.appendChild(p)
        }

        newsDiv.appendChild(img)
        newsDiv.appendChild(textDiv)

        newsContainer.appendChild(newsDiv)
        main.appendChild(newsContainer)
    }

}
