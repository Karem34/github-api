const showData = async () => {
  let lang = document.getElementById('lang-input').value
  let license = document.getElementById('license-input').value

  console.log('fetching data')
  let url = 'https://api.github.com/search/repositories?q=license:MIT';
  if (lang !== '') {
    url = url + '+language:' + lang
  }
  const r = await fetch(url);
  data = await r.json();
  let rand_item = Math.floor(Math.random() * data['items'].length)
  repo = data['items'][rand_item]
  console.log(repo)
  let name = document.getElementById('Name')
  let full_name = repo['full_name']
  name.innerText = full_name
  name.setAttribute('href', "http://github.com/" + full_name);
  document.getElementById('Stars').innerText = repo['stargazers_count']
  document.getElementById('Forks').innerText = repo['forks_count']
  document.getElementById('Watchers').innerText = repo['watchers']
  document.getElementById('Lang').innerText = repo['language']
}

showData()
