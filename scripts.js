const dummyData = [
  {
    username: 'EsportsReporter12',
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
  },
  {
    username:'Philosophydoodhaha',
    title: 'What is the meaning of life?',
    body: 'After an exhausting weekend, I started to question the meaning of life and what role I play in it',
    date: '02/16/2022 - 5:55 pm',
  },
  {
    username:'Kittyluvr',
    title: 'I love fish',
    body: 'All I seem to think about is fish and sleep. Sometimes I wake up to eat then I yawn and fall back asleep. Meow.',
    date: '03/03/2022 - 2:15 pm',
  },
  {
    username:'FishyDoc',
    title: 'Suspicious?',
    body: 'Should I fish or do something fishy today? To do or not to do...',
    date: '06/06/2006 - 6:16 pm',
  },
  {
    username:'Otterscientist',
    title: 'Cuddle',
    body: 'Cuddling while floating on my back is the best! ',
    date: '02/14/2014 - 2:14 am',
  }
];

const tweetsList = document.querySelector('.tweets');

for (let data of dummyData) {
  let tweet = document.createElement('div'); 
  tweet.className = "tweet";
  
  let tweetBody = document.createElement('div');
  tweetBody.className = 'tweetBody';
  tweetBody.innerHTML = data.body;

  let tweetDate = document.createElement('div');
  tweetDate.className = 'tweetDate';
  tweetDate.innerText = data.date;

  let tweetTitle = document.createElement('div');
  tweetTitle.className = 'tweetTitle';
  tweetTitle.innerHTML = data.title;

  let tweetUser = document.createElement('div');
  tweetUser.className = 'tweetUser';
  tweetUser.innerText = data.username;

  tweetsList.appendChild(tweet);
  tweet.appendChild(tweetUser);
  tweet.appendChild(tweetTitle);
  tweet.appendChild(tweetDate);
  tweet.appendChild(tweetBody);
}

function render() {
  empty(tweetsList);

  for (let data of dummyData) {
    let tweet = document.createElement('div'); 
    tweet.className = "tweet";
    
    let tweetBody = document.createElement('div');
    tweetBody.className = 'tweetBody';
    tweetBody.innerHTML = data.body;

    let tweetDate = document.createElement('div');
    tweetDate.className = 'tweetDate';
    tweetDate.innerText = data.date;

    let tweetTitle = document.createElement('div');
    tweetTitle.className = 'tweetTitle';
    tweetTitle.innerHTML = data.title;

    let tweetUser = document.createElement('div');
    tweetUser.className = 'tweetUser';
    tweetUser.innerText = data.username;

    tweetsList.appendChild(tweet);
    tweet.appendChild(tweetUser);
    tweet.appendChild(tweetTitle);
    tweet.appendChild(tweetDate);
    tweet.appendChild(tweetBody);
  }
}

function addDummyData() {
  let titleBank = ['He did what?!', 'No freaking way that happened!', 'This place is so good!', 'What about vegan?', 'Worst movie ever seen?', 'Amazing new song!', 'Beauty in the struggle', 'Suffering from success', 'This is mainstage', 'Guacamole!']; 
  let tweetBodyBank = ['tastes like purple ', 'I heard that ', 'today ', 'mornings ', 'puppies ', 'kittens ', 'raps ', 'in the league ', 
  'crossed him over ', 'watch the NBA ', 'friends came over ', 'to do ', 'new season of ', 'oh my gosh ', 'LOL ', 'that is ', 'how it ',
   'ended up on youtube ', 'jumped so high ', 'to that concert ', 'haha ', 'wants to get boba ', 'went to starbucks '];
  let tweetUserBank = ['kitty', 'lover', 'puppy', 'azn','boi', 'gurl', 'rice', 'hooper', 'swimming', 'flying', 'genius', 'loser', 'jiggly', 'chaser'];
  let newEntry = {
    username: tweetUserBank[Math.floor(Math.random() * (32 - 1) + 1)] + tweetUserBank[Math.floor(Math.random() * (32 - 1) + 1)],
    title: titleBank[Math.floor(Math.random() * 10)],
    body: tweetBodyBank[Math.floor(Math.random() * (23 - 1) + 1)] + tweetBodyBank[Math.floor(Math.random() * (23 - 1) + 1)] + tweetBodyBank[Math.floor(Math.random() * (23 - 1) + 1)],
    date: 'date',
  };
  dummyData.unshift(newEntry);
}

const renderNewDummyData = setInterval(addDummyData, 10000);

const allTweets = document.querySelectorAll('.tweet');

function empty(element) {
  while(element.firstElementChild) {
     element.firstElementChild.remove();
  }
}

const tweetUpdateButton = document.querySelector('.update-btn');
const tweetUpdateHandler = tweetUpdateButton.addEventListener('click', () => {
  render();
});