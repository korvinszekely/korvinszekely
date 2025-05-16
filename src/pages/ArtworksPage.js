import '../styles/Display.css'
import { useEffect } from 'react';
import { loadImagesFrom } from '../components/loadImagesFrom';

function ArtworksPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Artworks = loadImagesFrom("artwork").map((art) =>
        <div className='image'>
            <img src={art} />
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