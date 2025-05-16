import '../styles/Bio.css'
import { useEffect } from 'react';
import profileImage from '../images/bio/Korvin.png'

function BioPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='bioContainer'>
            <div className='subBioContainer'>
                <text>
                    korvin szekely
                    <br /><br /><br />
                    toronto
                    <br />
                    on

                    <br /><br />
                    visual artist <br />photographer<br />musician
                    <br /><br /><br />
                    cptklutz69@gmail.com
                </text>
                <div className='profilePhoto'>
                    <img src={profileImage} />
                </div>
            </div>
        </div>
    );
}

export default BioPage;