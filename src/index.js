// write your code here

fetch('url')
.then(response => response.json())
.then(data => {
    let id = data.id
    let title = data.title
    let likes = data.likes
    let image = data.image
    let comments = data.comments

    // Append the title
    let h2 = document.querySelector('#card-title')
    h2.textContent = title

    // Append the image itself
    let img = document.querySelector('#card-image')
    img.src = image

    // Append number of likes
    let span = document.querySelector('#like-count')
    span.textContent = `${likes} likes`

    // Append comments
    let ul = document.querySelector('#comments-list')
    comments.forEach(comment => {
        let li = document.createElement('li')
        li.textContent = comment.content
        ul.appendChild(li)
    })
})

// Incrementing the likes
document.querySelector('#like-button').addEventListener('click', (e) => {
    const span = document.querySelector('#like-count')
    let likesString = span.value
    // 0 likes
    let likesInt = parseInt(likesString.replace(" likes", ""))
    // 0
    likesInt++
    // 
    span.textContent = `${likesInt} likes`
})

// Adding a new comment
let button = document.querySelector('button.comment-button')
button.addEventListener('click', (e) => {
    e.preventDefault()
    let comment = document.querySelector('#comment')
    let newComment = comment.value

    let ul = document.querySelector('#comments-list')
    let li = document.createElement('li')
    li.textContent = newComment
    ul.appendChild(li)

    document.querySelector('#comment-form').reset()
})

