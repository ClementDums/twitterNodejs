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
let badwords = [" anal "," ass ","ballsack","balls","bastard","bitch","biatch","bloody",
    "boner",
    "boob",
    "butt",
    "cock",
    "cunt",
    "damn",
    "dick",
    "fag",
    " fuck ",
    "hell",
    "nigger",
    "nigga",
    "penis",
    "piss",
    "poop",
    "pussy",
    " sex ",
    " sexual ",
    " shit ",
    "slut",
    " tits ",
    "whore"];

let goodwords = [" cute " ," kitty ", " cupcake ", " nekko ", " kind ", " kawaii ", " friendly ", " gentle ", " pony ", " baby ", " cute baby ", " peperoni "," kitten "," pretty "," spaghetti "," bear cub "
, " adorable "," heaven "," cool man "," awesome person "," kiss "," hug "," cute kitty "," hug time "," attractive "," puppy "," cute puppy "," pandas "," panda "]
const filter= new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback){
        let testfinal = false;
        let newChunk;
        badwords.forEach((value, index) => {
            let test = chunk.toString().includes(value);

            if(test){
                newChunk = chunk.toString().replace(value, "<span class='good'>"+goodwords[index]+"</span>");
                testfinal=1;
        }
        });
        if(testfinal) {
            this.push(newChunk);
        }
        callback();
    }
});

module.exports = {tweetExtractor, stringify, filter}