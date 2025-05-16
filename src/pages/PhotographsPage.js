import '../styles/Display.css'
import PhotographsInfo from '../data/PhotographsInfo';
import { useEffect } from 'react';

function PhotographsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const Photographs = PhotographsInfo.map((photo, index) =>
        <div className='image'>
            <img src={require('../images/photography/' + photo.image)} />
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