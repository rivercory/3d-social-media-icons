import './App.css'
import { saveAs } from 'file-saver'

function App() {
  // YouTube
  const DownloadYouTubePng = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-youtube.png', 'social-youtube.png')
  }

  const DownloadYouTubeJpg = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-youtube.jpg', 'social-youtube.jpg')
  }

  const DownloadYouTubeSvg = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-youtube.svg', 'social-youtube.svg')
  }

  // GitHub
  const DownloadGitHubPng = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-github.png', 'social-github.png')
  }

  const DownloadGitHubJpg = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-github.jpg', 'social-github.jpg')
  }

  const DownloadGitHubSvg = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-github.svg', 'social-github.svg')
  }

  // Facebook
  const DownloadFacebookPng = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-facebook.png', 'social-facebook.png')
  }

  const DownloadFacebookJpg = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-facebook.jpg', 'social-facebook.jpg')
  }

  const DownloadFacebookSvg = () => {
    saveAs('https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-facebook.svg', 'social-facebook.svg')
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-4 m-4">
        {/* YouTube */}
        <div className="card bg-base-100 w-auto border border-2">
          <figure className="p-4">
            <img
              src="https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-youtube.svg"
              alt="YouTube icon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">YouTube</h2>
            <div className="card-actions justify-end">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Download</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow">
                  <li onClick={DownloadYouTubePng}><a>.png</a></li>
                  <li onClick={DownloadYouTubeJpg}><a>.jpg</a></li>
                  <li onClick={DownloadYouTubeSvg}><a>.svg</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* GitHub */}
        <div className="card bg-base-100 w-auto border border-2">
          <figure className="p-4">
            <img
              src="https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-github.svg"
              alt="GitHub icon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GitHub</h2>
            <div className="card-actions justify-end">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Download</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow">
                  <li onClick={DownloadGitHubPng}><a>.png</a></li>
                  <li onClick={DownloadGitHubJpg}><a>.jpg</a></li>
                  <li onClick={DownloadGitHubSvg}><a>.svg</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Facebook */}
        <div className="card bg-base-100 w-auto border border-2">
          <figure className="p-4">
            <img
              src="https://cdn.jsdelivr.net/gh/rivercory/3d-social-media-icons/website/public/icons/social-facebook.svg"
              alt="Facebook icon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Facebook</h2>
            <div className="card-actions justify-end">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Download</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow">
                  <li onClick={DownloadFacebookPng}><a>.png</a></li>
                  <li onClick={DownloadFacebookJpg}><a>.jpg</a></li>
                  <li onClick={DownloadFacebookSvg}><a>.svg</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
