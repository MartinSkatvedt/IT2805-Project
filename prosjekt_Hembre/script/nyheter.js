function writeNews() {
    const main = document.querySelector('main')
    const newsContainer = document.createElement('div')
    newsContainer.id = 'news-container'
    for (let i = 0; i < news.length; i++) {
        const element = news[i];
        const newsDiv = document.createElement('div')
        newsDiv.className = 'news-div'
        newsDiv.id = element.id
        // const ancor = document.createElement('a')
        // ancor.id = element.id
        // ancor.className = 'ancor'
        // newsDiv.appendChild(ancor)
        
        const header = document.createElement('h2')
        header.innerHTML = element.header
        
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
        
        newsDiv.appendChild(textDiv)
        newsDiv.appendChild(img)
        
        newsContainer.appendChild(newsDiv)
        main.appendChild(newsContainer)
    }

}
