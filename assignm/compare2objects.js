var bike1 = {
    name: "ktm",
    milage: 35,
    releaseYear: 2010
}
var bike2 = {
    name: "mt15",
    milage: 45,
    releaseYear: 2019
}

function compareTo( obj1, obj2 ){

    var obj1ProNames = Object.getOwnPropertyNames(obj1);
    var obj2ProNames = Object.getOwnPropertyNames(obj2);

    if( obj1ProNames.length != obj2ProNames.length ){
        return false;
    }

    for( var i = 0; i < obj1ProNames.length; i++ ){
        var name = obj1ProNames[i];
        if( obj1[name] != obj2[name] ){
            return false;
        }
    }

    return true;
}

console.log( compareTo( bike1, bike2 ) );