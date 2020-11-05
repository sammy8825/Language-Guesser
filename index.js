const text = process.argv[2];
const franc = require('franc');
const langs = require('langs');
const colors = require('colors');


function language (text) {
    if (franc(text) !== 'und'){
        return `Our best guess is : ${(langs.where("3", franc(text)).name).green}`;
    }
    else{
        return ("Oppps!!!! Try something larger").red;
    }
};

console.log(language(text));