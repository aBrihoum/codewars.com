//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function friend(friends) {
    return friends.filter(x => x.length === 4)
}

friend(["Ryan", "Kieran", "Mark"])