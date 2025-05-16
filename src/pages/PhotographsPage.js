import '../styles/Display.css'
import { useEffect } from 'react';
import { loadImagesFrom } from '../components/loadImagesFrom';

function PhotographsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const Photographs = loadImagesFrom('photography').map((photo) =>
        <div className='image'>
            <img src={photo} />
        </div>
    )

    return (
        <div className='container'>
            <div className='subContainer'>
                {Photographs}
            </div>
        </div>
    );
}

export default PhotographsPage;