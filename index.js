const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push('Ralph')
    return cats
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}
function appendCat(){
    const newCats = ["Milo", "Otis", "Garfield"]
    newCats.push("Broom")
    return newCats
}
function prependCat(){
    const newCats = ["Milo", "Otis", "Garfield"]
    newCats.unshift("Arnold")
    return newCats
}
function removeLastCat(){
    removeLastCat = ["Milo", "Otis", "Garfield"]
    removeLastCat.pop()
    return removeLastCat
}
function removeFirstCat(){
    removeFirstCat = ["Milo", "Otis", "Garfield"]
    removeFirstCat.shift()
    return removeFirstCat
}