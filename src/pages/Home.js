import '../styles/Home.css'
import MusicInfo from '../data/MusicInfo';
import { useEffect } from 'react';
import VideosList from '../components/VideosList';
import { loadImagesFrom } from '../components/loadImagesFrom';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const Photographs = loadImagesFrom("photography").map((photo) =>
    <div className='image'>
        <img src={photo} />
    </div>
)

const Music = MusicInfo.map((music) =>
  <div className='image'>
      <a href={music.link} target="_blank">
      <img src={require('../images/music/' + music.image)} />
      </a>
  </div>
)

    const Artworks = loadImagesFrom("artwork").map((art) =>
        <div className='image'>
            <img src={art} />
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
