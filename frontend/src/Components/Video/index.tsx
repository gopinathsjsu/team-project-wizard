import React from 'react';
interface VideoProps  {
    movieTrailerUrl?: string
}
const YouTubeVideoEmbed: React.FC<VideoProps> = ({ movieTrailerUrl }) => {
  // Construct the URL for the YouTube video iframe
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={movieTrailerUrl || "https://www.youtube.com/embed/NgBoMJy386M?si=ntu1tHdgMqCpIHYw"}
        frameBorder="0"
        title="YouTube Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideoEmbed;
