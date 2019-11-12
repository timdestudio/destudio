import React from 'react'
import { fontSizer, getCols, } from '../utils/utils'

class Video extends React.PureComponent {
    render = () => {
        return (
            <div className="container">
                {/* <video className="video" autoPlay loop muted playsInline>
                    <source src={`/static/videos/landing-video.mp4`} type="video/mp4" />
        </video> */}
                
                <style jsx>{`
                    .container {
                        position: relative;
                        width: ${ getCols(25) }vw;
                        height: ${ getCols(37.5) }vw;
                        overflow: hidden;

                        background: #F7F7F7;
                        margin-left: ${ getCols(2) }vw;

                        background-image: url('/static/images/video-placeholder.jpg');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }

                    video {
                        position: absolute;
                        top: 50%;
                        left: 0;

                        transform: translate(-25%, -50%);

                        width: 150%;
                        height: auto;
                    }

                    @media (min-width: 900px) { 
                        .container {
                            width: ${ getCols(27) }vw;
                            height: ${ getCols(26) }vw;

                            margin-left: ${ getCols(1) }vw;
                        }

                        .video {
                            width: 100%;                 
                            transform: translate(0, -50%);
                        }

                    }
                `}</style>
            </div>
        )
    }
}

export default Video