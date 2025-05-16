import '../styles/Display.css'
import MusicInfo from '../data/MusicInfo';
import { useEffect } from 'react';

function MusicPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const Music = MusicInfo.map((music, index) =>
        <div className='image'>
            <a href={music.link} target="_blank">
            <img src={require('../images/music/' + music.image)} />
            </a>
        </div>
    )

    return (
        <div className='container'>
            <div className='subContainer'>
                {Music}
            </div>
        </div>
    );
}

export default MusicPage;