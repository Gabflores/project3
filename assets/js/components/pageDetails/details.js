const id = new URLSearchParams(window.location.search).get('id');

const showDetails = async () => {
    const response = await fetch('http://localhost:3000/postsData/' + id);
    const post = await response.json();
    console.log(post)
}

window.addEventListener('DOMContentLoaded', () => showDetails());