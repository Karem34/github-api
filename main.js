// Copyright (c) 2021 Karem34

const showData = async () => {
  let lang = document.getElementById('lang-input').value
  let license = document.getElementById('license-input').value
  let search = document.getElementById('search-input').value
  let stars = document.getElementById('stars-input').value
  let url = 'https://api.github.com/search/repositories?q=';
  let name = document.getElementById('Name')

  if (search !== '') {url += search}
  if (stars !== '') {url += '+stars:>=' + stars}
  if (lang !== '') {url += '+language:' + lang}
  if (license !== '') {url += '+license:' + license}

  const r = await fetch(url);
  data = await r.json();

  let rand_item = Math.floor(Math.random() * data['items'].length)
  repo = data['items'][rand_item]

  let full_name = repo['full_name']
  name.innerText = full_name
  name.setAttribute('href', "http://github.com/" + full_name);
  document.getElementById('Stars').innerText = repo['stargazers_count']
  document.getElementById('Forks').innerText = repo['forks_count']
  document.getElementById('Description').innerText = repo['description']

  if (repo['language'] == null) {
    document.getElementById('Lang').innerText = "No language"
    }else{
    document.getElementById('Lang').innerText = repo['language']
  }
  if (repo['license'] == null) {
    document.getElementById('License').innerText = "No License"
    }else{
    document.getElementById('License').innerText = repo['license']['name']
  }
}
showData()
