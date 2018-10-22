const {Transform}=require("stream");

const tweetExtractor = new  Transform({
    readableObjectMode: true,
    writableObjectMode: true,

    transform(chunk, encoding, callback){
        const newChunk = chunk.text;
        this.push(newChunk);
        callback();
    }
});

const stringify = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback){
        const newChunk = JSON.stringify(chunk) + '\n';
        this.push(newChunk);
        callback();

    }
});
let badwords = [" anal ","anus"," arse "," ass ","ballsack","balls","bastard","bitch","biatch",
    "bloody",
    "blowjob",
    "bollock",
    "bollok",
    "boner",
    "boob",
    "bugger",
    "bum",
    "butt",
    "buttplug",
    "clitoris",
    "cock",
    "coon",
    "cunt",
    "damn",
    "dick",
    "dildo",
    "dyke",
    "fag",
    "feck",
    "fellate",
    "fellatio",
    "felching",
    "fuck",
    "fudgepacker",
    "fudge packer",
    "flange",
    "Goddamn",
    "God damn",
    "hell",
    "homo",
    "jerk",
    "jizz",
    "knobend",
    "knob end",
    "labia",
    "muff",
    "nigger",
    "nigga",
    "penis",
    "piss",
    "poop",
    "prick",
    "pube",
    "pussy",
    "queer",
    "scrotum",
    " sex ",
    "shit",
    "slut",
    "smegma",
    "spunk",
    " tits ",
    "tosser",
    "turd",
    "twat",
    "vagina",
    "wank",
    "whore"]
const filter= new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback){
        let testfinal = false;
        badwords.forEach((value) => {
            let test = chunk.toString().includes(value);
            if(test){
                testfinal=1;
        }
        });
        if(testfinal) {
            this.push(chunk);
        }
        callback();
    }
});

module.exports = {tweetExtractor, stringify, filter}