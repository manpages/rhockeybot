var figlet = require('figlet');

var quote = function(quotes, log) {
  if(!(quotes instanceof Array)) {
    quotes = [quotes];
  }
  return function(data, nick) {
    if(log) {
      this.log(log.split("$nick").join(nick));
    }
    this.talk(quotes[(Math.random() * quotes.length) | 0].replace("$nick", nick));
  };
};

module.exports = function(get) {
  return {
    "source": {
      fn: quote("If you have suggestions/feature requests or just want to see the source, it's at http://github.com/eugene-bulkin/rhockeybot", "$nick asked about my source code")
    },
    "canucks": {
      fn: quote("http://i.imgur.com/Pkqiwcj.jpg", "$nick made fun of the Canucks")
    },
    "murt": {
      fn: function(data, nick) {
        figlet("FUCK OFF MURT", {
          font: 'Small',
          horizontalLayout: 'fitted'
        }, function(err, data) {
          var msgs = [
            "FUCK OFF MURT",
            "http://i.imgur.com/d9pZQS0.jpg",
            "http://i.imgur.com/nXqgx5X.jpg",
            "http://i.imgur.com/0rT7INi.jpg",
            "http://i.imgur.com/eeBDs9L.jpg",
            "http://i.imgur.com/wWoifA8.jpg",
            "http://i.imgur.com/DZtTLqf.jpg",
            "http://i.imgur.com/3UsTnbP.jpg",
            "http://i.imgur.com/6d6jNGU.jpg",
            "http://i.imgur.com/Ynd0IVC.jpg",
            "http://i.imgur.com/5n0ZAcq.jpg",
            "http://i.imgur.com/OmrlFRZ.jpg",
            "http://i.imgur.com/awF5j2e.jpg"
          ];
          if(!err) {
            msgs.push(data);
          }
          this.log(nick + " told murt to fuck off");
          this.talk(msgs[(Math.random() * msgs.length) | 0]);
        }.bind(this));
      }
    },
    "doc": {
      fn: quote("http://i.imgur.com/tJaBJjl.gif", "$nick pasted the Doc Rivers face")
    },
    "leafer": {
      fn: quote("Man, I really could go for some throat lasagnas right now.", "$nick quoted Leafer91")
    },
    "doubleaw": {
      fn: quote("That's the guy that made me. He must be way better than amaninacan.", "$nick asked me to talk about how awesome DoubleAW is")
    },
    "ruhan": {
      fn: quote("No, ruhan, you can't have the Chicago fourth line.", "$nick made fun of ruhan")
    },
    "thero": {
      fn: function(data, nick) {
        if(nick.toLowerCase() === "thero") {
          this.log(nick + " tried to tell dan to fuck himself but failed");
          this.talk("Go fuck yourself " + nick + ".");
        } else {
          this.log(nick + " told dan to fuck himself");
          this.talk("Go fuck yourself dan.");
        }
      }
    },
    "dan": {
      fn: quote("Hey $nick wanna suck me off?", "$nick asked for a blowjob")
    },
    "signal": {
      fn: quote(["Hey $nick do you have a sister?", "Hey $nick what color are your pubes?", "Hey $nick would you drink my bathwater?", "Hey $nick can you recommend a good porno?"], "$nick quoted SiGNAL")
    },
    "uck": {
      fn: quote("Woah, watch your language, asshole.", "$nick swore at me")
    },
    "thirty": {
      fn: quote("The fix will be posted at noon tomorrow on macrumors.com", "$nick quoted thirty")
    },
    "snackle": {
      fn: quote("#JasminesNips2014", "$nick said something about Jasmine's nips")
    },
    "panthers": {
      fn: quote("http://i.imgur.com/LXDNmml.jpg", "$nick blessed the channel with the Panthers logo")
    },
    "lahey": {
      fn: quote([
        "Birds of a shitfeather flock together, $nick.",
        "You just opened Pandora's Shitbox, $nick.",
        "I am the liquor.",
        "The shit pool's gettin full $nick, time to strain the shit before it overflows. I will not have a Pompeiian shit catastrophe on my hands.",
        "Did you see that, $nick? Goddamn shitapple driving the shitmobile. No body else in this park gives a fuck why should I?",
        "The ole shit liner is coming to port, and I'll be there to tie her up.",
        "How dare you involve my daughter in your hemisphere of shit.",
        "Captain Shittacular.",
        "I'm watching you, like a shithawk.",
        "We're sailing into a shit typhoon $nick, we'd better haul in the jib before it gets covered in shit.",
        "How dare you involve my daughter in your hemisphere of shit.",
        "Your shit-goose is cooked, $nick.",
        "Shit-apples never fall far from the shit-tree, $nick.",
        "$nick's about to enter the shit tornado to Oz.",
        "Do you feel that $nick? The way the shit clings to the air? Shit Blizzard.",
        "Never Cry Shitwolf, $nick",
        "Yes I used to drink, $nick, but I got the shitmonkey off my back for good.",
        "You know what you get when two shit-tectonic plates collide? Shitquakes, $nick. Shitquakes.",
        "The ole shit liner is coming to port, and I'll be there to tie her up.",
        "We got the key to shitty city, $nick, and Julian's the muscular mayor.",
        "You boys have loaded up a hair-trigger, double barrelled shitmachinegun, and the barrel's pointing right at your own heads.",
        "Shit moths, $nick.",
        "Do you know what a shit rope is, $nick?",
        "The old shit barometer is rising."
      ], "$nick asked for a Lahey quote")
    },
    "iglet": {
      fn: function(data, nick) {
        if(nick !== "DoubleAW" && nick !== "AWAW") {
          this.log(nick + " tried to use figlet.");
          this.talk("You can't do that.");
          return;
        }
        figlet(data.join(" "), {
          font: 'Small',
          horizontalLayout: 'fitted'
        }, function(err, str) {
          this.log("Displayed a figlet image for the phrase '" + data.join(" ") + "'");
          this.talk(str);
        }.bind(this));
      }
    }
  };
};