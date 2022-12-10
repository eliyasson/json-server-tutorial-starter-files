// javascript for index.html
const container = document.querySelector('.blogs');

const renderPosts = async () =>{
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const posts = await res.json();
    
    let templete = '';
    posts.forEach(post => {
        templete += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0, 200)}</p>
                <a href="/details.html">read more...</a>
            </div>
        `
    })

    container.innerHTML = templete;

}
window.addEventListener('DOMContentLoaded', () => renderPosts());