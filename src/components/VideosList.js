import '../styles/Display.css'
import VideoInfo from '../data/VideoInfo';

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
}

function VideosList() {
    const Videos = VideoInfo.map((vid) => {

        var vidID = youtube_parser(vid.link)
        return (
            <div className='image'>
                <a href={vid.link} target="_blank">
                    <img src={'http://img.youtube.com/vi/' + vidID + '/maxresdefault.jpg'} />
                </a>
            </div>
        )
    }
    )

    return (
        <>
            {Videos}
        </>
    )
}

export default VideosList;