

let pronoun = ['la','nuestro', 'mi', 'su'];
let adj = ['gran', 'mejor', 'nueva' ];
let noun = ['sueño','libro', 'sonido','imagen','cripto'];
let ext = ['.net','.com', '.org', '.ve', '.do', '.ar', '.mx'];

function domainGenerator(pronoun, adj, noun){
    let completeName = [];
    pronoun.forEach(function (p){ 
        adj.forEach(function (a){
            noun.forEach(function(n){ 
                ext.forEach(function(e){
                    completeName.push( p.concat(a.concat(n).concat(e)) ) ;
                })
            })
        })
    });

    return completeName;
}


function domainGeneratorExtension(pronoun, adj, noun, ext){
    let completeName = [];
    pronoun.forEach(function (p){ 
        adj.forEach(function (a){
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