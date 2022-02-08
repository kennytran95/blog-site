const dummyData = [
  {
    title: 'Faker gets solo killed by random barcode username?!',
    body: 'WHO IS THIS? A random barcode username player assassinates Faker on leblanc with lee sin!',
    date: '01/01/2013',
  },
  {
    title: 'Leffen johns for the 5th time this month',
    body: 'Leffen suffers another defeat to the hands of Plup. Leffen then proceeds to go to twitter and blame food poisoning. Every lost of leffen has had some form of excuse. Coincidence? We think not...',
    date: '05/1/2015',
  },
  {
    title: 'Leffen won EVO!',
    body: 'Leffen has won EVO beating Aramada, Plup, and hungrybox! Maybe complaining was the secret sauce after all...',
    date: '08/17/2017',
  },
  {
    title: 'Illenium announces his 4th album - Flares',
    body: 'Illenium comes out of retirement to announce his fourth and final album - Flares. He says this album will surround his feelings of revival and will be his best album yet.',
    date: '01/30/2022',
  },
  {
    title: 'Shimoshi becomes a billionaire',
    body: 'Shimoshi has had tremendous success from his startup named iPunchStuff. This company specializes in being built different and being better. Ever since launching his start-up in 2022, he has risen up on the global radar at lightning speeds!',
    date: '07/07/2025',
  }
];

for (let data of dummyData) {
  let tweet = document.createElement('li'); 
  tweet.id = "myTweet";
  tweet.style.height = "140px";
  tweet.style.width = "50rem";
  tweet.style.textAlign = 'center';
  tweet.style.background = "#15202b";
  tweet.style.margin = "0 auto";
  tweet.style.border = "gray solid 0.2px";
  tweet.style.borderRadius = "10px";
  tweet.style.listStyle = "none";
  tweet.innerText = data.title + " - " + data.date + "\n" + data.body;
  document.body.appendChild(tweet);
}



/* render information into DOM (each into their own box)
style it
*/