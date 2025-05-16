import '../styles/Display.css'
import ArtInfo from '../data/ArtInfo';
import { useEffect } from 'react';

function ArtworksPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const Artworks = ArtInfo.map((art, index) =>
        <div className='image'>
            <img src={require('../images/artwork/' + art.image)} />
        </div>
    )

    return (
        <div className='container'>
            <div className='subContainer'>
                {Artworks}
            </div>
        </div>
    );
}

export default ArtworksPage;