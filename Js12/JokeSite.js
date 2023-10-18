let myJokes = [
    
            {
                "category": "Programming",
                "type": "single",
                "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 2,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 18,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Pun",
                "type": "twopart",
                "joke": "What do you call a cheap circumcision?",
                "delivery": "A rip off.",
                "flags": {
                    "nsfw": true,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "id": 156,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "My parents raised me as an only child, which really annoyed my younger brother.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 235,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Pun",
                "type": "twopart",
                "joke": "A Roman walks into a bar and raises 2 fingers and says to the bartender...",
                "delivery": "\"Five beers, please.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "safe": true,
                "id": 286,
                "lang": "en"
            }
        
    
];

let index = Math.floor(Math.random() * (myJokes.length - 1));
console.log(index);
jokes.innerHTML = myJokes[index].joke;