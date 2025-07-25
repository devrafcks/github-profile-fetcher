const API_URL = 'https://api.github.com/users/devrafcks';

async function fetchGitHubData() {
    try {
    const response = await fetch(API_URL);
    const data = await response.json();

    document.getElementById('repos-count').innerText = data.public_repos;
    document.getElementById('followers-count').innerText = data.followers;
    document.getElementById('following-count').innerText = data.following;
    document.querySelector('.profile-avatar').src = data.avatar_url;
    document.querySelector('.profile-name').innerText = data.name;
    document.querySelector('.profile-username').innerText = `@${data.login}`;
    document.querySelector('.profile-link').href = data.html_url;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchGitHubData();