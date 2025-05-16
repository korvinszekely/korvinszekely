import '../styles/Home.css'
import PhotographsInfo from '../data/PhotographsInfo';
import MusicInfo from '../data/MusicInfo';
import ArtInfo from '../data/ArtInfo';
import { useEffect } from 'react';
import VideosList from '../components/VideosList';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const Photographs = PhotographsInfo.map((photo, index) =>
    <div className='image'>
        <img src={require('../images/photography/' + photo.image)} />
    </div>
)

const Music = MusicInfo.map((music, index) =>
  <div className='image'>
      <a href={music.link} target="_blank">
      <img src={require('../images/music/' + music.image)} />
      </a>
  </div>
)

    const Artworks = ArtInfo.map((art, index) =>
        <div className='image'>
            <img src={require('../images/artwork/' + art.image)} />
        </div>
    )

  return (
    <div className='homeContainer'>
      <div className='homeSubContainer'>
        {Photographs}
        {Artworks}
        <VideosList/>
        {Music}
      </div>
    </div>
  );
}

export default Home;
