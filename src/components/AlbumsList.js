import * as React from 'react'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>
    {/* Adjust the AlbumsList so that it renders an <ul> tag with an <li> for every album that is passed into the props.albums. Inside the <li>, the title of the album should be shown. Don't forget the key property and always check your console for errors! */}
    <ul>
        {props.albums.map( album => <li>{album.title}</li>)}
    </ul>

    There are { props.albums.length } albums available.
  </div>)
}