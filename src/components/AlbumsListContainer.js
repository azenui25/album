import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld,addAlbums } from '../actions/test'


class AlbumsListContainer extends React.Component {
  //state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then((response) =>{
          //this.setState({ albums: response.body })
            return response.body
      } )
      .then((albums) => {
            console.log("hi",albums)
          this.props.addAlbums(albums)
          this.props.addAlbums(albums)
       } )
      
      //this.props.helloWorld('Alice', 'McDog' )

      
  }

  render() {
      console.log("render of albumcont",this.props);
      
    if (!this.props.albums) return 'Loading...'
   

    return <div><AlbumsList albums={this.props.albums} /> 
   
    </div>
  }
}
function mapSateToProps(reduxStore){
    console.log("mstp",reduxStore);
    
    return({
        albums: reduxStore.albums
    })
}


export default connect(mapSateToProps, { helloWorld, addAlbums})(AlbumsListContainer)

