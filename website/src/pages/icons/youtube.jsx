import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';

function YouTube() {
    // YouTube
    const DownloadYouTubePng = () => {
        saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/youtube.png', 'youtube.png')
    }

    const DownloadYouTubeJpg = () => {
        saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/youtube.jpg', 'youtube.jpg')
    }

    const DownloadYouTubeSvg = () => {
        saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/youtube.svg', 'youtube.svg')
    }

    return (
        <>
            <Link to="/">
                <div className="mx-4 p-1.5 rounded-lg hover:bg-base-300 w-fit">← Back to home</div>
            </Link>
            <div className="md:flex bg-base-100 rounded-lg border border-2 m-4">
                <div className="flex-none w-auto p-4 text-center">
                    <img
                        src="https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/youtube.svg"
                        alt="YouTube icon" />
                    <h2 className="text-2xl font-bold p-4">YouTube</h2>
                </div>
                <div className="flex-auto w-64 p-4">
                    <li onClick={DownloadYouTubePng}><a>.png</a></li>
                    <li onClick={DownloadYouTubeJpg}><a>.jpg</a></li>
                    <li onClick={DownloadYouTubeSvg}><a>.svg</a></li>
                </div>
            </div>
        </>
    )
}

export default YouTube
