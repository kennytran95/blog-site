const dummyData = [
  {
    username: 'Esports Reporter12',
    title: '<strong class="faker">Faker</strong> gets solo killed by random barcode username?!',
    body: 'WHO IS THIS? A random barcode username assassinates <strong class="faker">Faker</strong> on leblanc with lee sin!',
    date: '01/01/2013 - 4:12 am',
  },
  {
    username: 'Mangolover99',
    title: '<strong class="leffen">Leffen</strong> johns for the 5th time this month',
    body: '<strong class="leffen">Leffen</strong> suffers another defeat to the hands of Plup. Leffen then proceeds to go to twitter and blame food poisoning. Every lost of leffen has had some form of excuse. <strong class="faker">Coincidence?</strong> I think not...',
    date: '05/1/2015 - 12:30 pm',
  },
  {
    username: 'Leffenlover6',
    title: '<strong class="leffen">Leffen</strong> won EVO!',
    body: '<strong class="leffen">Leffen</strong> has won EVO beating Aramada, Plup, and Hungrybox! Maybe <strong class="faker">complaining</strong> was the secret sauce after all...',
    date: '08/17/2017 - 6:44 pm',
  },
  {
    username: 'Illeniial111',
    title: '<strong class="illenium-title">Illenium</strong> announces his 4th album - Flares',
    body: '<strong class="illenium-title">Illenium</strong> comes out of retirement to announce his fourth and final album - Flares. He says this album will surround his feelings of revival and will be his best album yet.',
    date: '01/30/2022 - 1:14 pm',
  },
  {
    username:'Shimoshisimp777',
    title: '<strong class="shimoshi">Shimoshi</strong> becomes a billionaire',
    body: '<strong class="shimoshi">Shimoshi</strong> has had tremendous success from his startup named iPunchStuff. This company specializes in being built different and being better. Ever since launching his start-up in 2022, he has risen up on the global radar at record speeds!',
    date: '07/07/2025 - 2:14 am',
  }
];

for (let data of dummyData) {
  let tweet = document.createElement('div'); 
  tweet.className = "tweet";
  
  let tweetBody = document.createElement('div');
  tweetBody.className = 'tweetBody';
  tweetBody.innerHTML = data.body;

  let tweetDate = document.createElement('div');
  tweetDate.className = 'tweetDate';
  tweetDate.innerText = data.date + "\n" + "\n";

  let tweetTitle = document.createElement('div');
  tweetTitle.className = 'tweetTitle';
  tweetTitle.innerHTML = data.title + '\n';

  let tweetUser = document.createElement('div');
  tweetUser.className = 'tweetUser';
  tweetUser.innerText = data.username;

  document.body.appendChild(tweet);
  tweet.appendChild(tweetUser);
  tweet.appendChild(tweetTitle);
  tweet.appendChild(tweetDate);
  tweet.appendChild(tweetBody);

}



/* render information into DOM (each into their own box)
style it
*/