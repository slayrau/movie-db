/* eslint-disable jsx-a11y/media-has-caption */
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import { VideoSitesToUrl } from 'src/utils/const';
import './style.scss';

const VideoPlayer = ({ videoKey, name, site }) => {

  return (
    <div className="video-player">
      <div className="video-player__body">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={VideoSitesToUrl[site] + videoKey}
        />
      </div>

      <h3 className="video-player__title">{name}</h3>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
};

export default VideoPlayer;
