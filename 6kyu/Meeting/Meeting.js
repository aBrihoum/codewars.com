//  ~~~~~~~~ SOLUTION ~~~~~~~~ :

function meeting(s) {
    return s.toUpperCase().split(';').map(x => x.split(':').reverse()).sort().map(x => x = `(${x.join(', ')})`).join("")
}

meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill')