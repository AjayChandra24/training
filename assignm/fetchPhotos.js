(fetch( 'https://jsonplaceholder.typicode.com/photos' ).then( response => response.json() ).then( photos => {
    ul = document.getElementById( "photo" );
    for( var i = 0; i < photos.length; i++ ){
        li = document.createElement( 'li' );
        img = document.createElement( 'img' );
        img.setAttribute( "src", photos[i].thumbnailUrl );
        li.appendChild(img);
        li.setAttribute("style","display:inline");
        ul.appendChild(li);
    }
} ))