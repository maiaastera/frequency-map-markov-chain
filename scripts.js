import { text } from './text.js';
let cleanText = text;

function clean(){
    cleanText = cleanText.toLowerCase();
    cleanText = cleanText.replaceAll(/[^a-z\s]/g, "");
    cleanText = cleanText.split(/\s+/);
}

function map(){
    let mop = {};
    for(let i = 0; i < cleanText.length; i++){
        if (mop[cleanText[i]] == undefined){
            mop[cleanText[i]] = {};
            for(let x = 0; x < cleanText.length; x++){
                if(Object.hasOwn(cleanText[i], cleanText[x])== false){
                    mop[cleanText[i]][cleanText[x]] = cleanText[x];
                } else {

                }
        
            }
        } 
        
    }
    console.log(mop);
}

clean();
console.log(cleanText);
map();