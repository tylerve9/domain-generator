

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

function domainGenerator(pronoun, adj, noun){
    let completeName = [];
    pronoun.forEach(function (p){ 
        adj.forEach(
            function (a){
                    noun.forEach(function(n){ 
                    completeName.push( p.concat(a.concat(n).concat('.com')) )  
            })
        })
    });

    return completeName;
}


let listaCompleta = domainGenerator(pronoun, adj, noun);
listaCompleta.map(elemento => console.log(elemento));
//console.log(listaCompleta); 
/*
mn, ,m ,mk 
k;jnn
k n;
; kn;kjnnlj
 */