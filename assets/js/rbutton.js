// Create button and add to body
const button = document.createElement('button');
button.textContent = 'Fetch GitHub API';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
document.body.appendChild(button);

// Function to make secure request
async function fetchGitHubAPI() {
  try {
    const response = await fetch('https://api.github.com', {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      },
      mode: 'cors', // cross-origin, secure by browser rules
      cache: 'no-cache',
      credentials: 'omit'
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    alert('Successfully fetched GitHub API: ' + JSON.stringify(data, null, 2));
  } catch (error) {
    alert('Fetch error: ' + error.message);
  }
}

// Add event listener to trigger fetch on click
button.addEventListener('click', fetchGitHubAPI);