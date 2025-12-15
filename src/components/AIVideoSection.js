import React, { useState } from 'react';

const AIVideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Add your AI videos with full Cloudinary URLs
  const aiVideos = [
    
    {
      id: 1,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010324/idea-to-Reality_qkveil.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010324/idea-to-Reality_qkveil.jpg',
      title: 'AI Video 1'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010323/straw_vsiejl.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010323/straw_vsiejl.jpg',
      title: 'AI Video 2'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010325/rz-wrap_ev6kzq.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_3/v1764010325/rz-wrap_ev6kzq.jpg',
      title: 'AI Video 3'
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010329/90s_Video_a7i66g.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010329/90s_Video_a7i66g.jpg',
      title: 'AI Video 4'
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010330/baby-camera_hh44qq.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_4/v1764010330/baby-camera_hh44qq.jpg',
      title: 'AI Video 5'
    },
    {
      id: 6,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010318/version2_azcwh3.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_3/v1764010318/version2_azcwh3.jpg',
      title: 'AI Video 6'
    },
    {
      id: 7,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010318/fahd_jayeua.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010318/fahd_jayeua.jpg',
      title: 'AI Video 7'
    },
    {
      id: 9,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010320/cctv_fb2yz5.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_4/v1764010320/cctv_fb2yz5.jpg',
      title: 'AI Video 9'
    },
    {
      id: 16,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1765704205/%D9%86%D8%B4%D8%A7%D9%85%D9%89_uw0con.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/v1765704205/%D9%86%D8%B4%D8%A7%D9%85%D9%89_uw0con.jpg',
      title: 'AI Video 16'
    },
    {
      id: 10,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010324/winter-is-coming_esp1tw.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010324/winter-is-coming_esp1tw.jpg',
      title: 'AI Video 10'
    },
    {
      id: 14,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1765704206/%D9%85%D8%AF%D9%89_%D8%B4%D8%B1%D9%8A%D9%83%D9%83_%D9%84%D8%B9%D8%A7%D9%85_2026_djxgnx.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_7/v1765704206/%D9%85%D8%AF%D9%89_%D8%B4%D8%B1%D9%8A%D9%83%D9%83_%D9%84%D8%B9%D8%A7%D9%85_2026_djxgnx.jpg',
      title: 'AI Video 14'
    },
    {
      id: 11,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010324/dream_yif8ts.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010324/dream_yif8ts.jpg',
      title: 'AI Video 11'
    },
    {
      id: 12,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010318/key_hrvqji.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010318/key_hrvqji.jpg',
      title: 'AI Video 12'
    },
    { 
      id: 13, 
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010331/billboard4_wu5nsc.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010331/billboard4_wu5nsc.jpg',
      title: 'AI Video 13' 
    },
    {
      id: 8,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010329/Marble_Final_qzd8ly.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_4/v1764010329/Marble_Final_qzd8ly.jpg',
      title: 'AI Video 8'
    },
    {
      id: 15,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1765704206/%D8%A7%D9%84%D8%B7%D8%A8%D8%B9%D8%A7%D8%AA_2_pffz8u.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1765704206/%D8%A7%D9%84%D8%B7%D8%A8%D8%B9%D8%A7%D8%AA_2_pffz8u.jpg',
      title: 'AI Video 15'
    },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsLoading(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsLoading(false);
  };

  return (
    <section id="ai-videos" className="ai-video-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">AI-Powered Video Productions</h2>
          <p className="section-subtitle">
            Cutting-edge AI technology meets creative storytelling
          </p>
        </div>

        <div className="video-grid">
          {aiVideos.slice(0, visibleCount).map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => handleVideoClick(video)}
            >
              <div className="video-thumbnail">
                <img
                  src={video.thumbnail || video.url.replace('/upload/', '/upload/so_0/')}
                  alt={video.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=AI+Video+Thumbnail';
                  }}
                />
                <div className="play-overlay">
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)" />
                      <path
                        d="M25 20L40 30L25 40V20Z"
                        fill="#157037"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ai-badge">AI</div>
              </div>
            </div>
          ))}
        </div>
        {aiVideos.length > 6 && visibleCount < aiVideos.length && (
          <div className="show-more-container">
            <button className="show-more-button" onClick={() => setVisibleCount(aiVideos.length)}>
              Show More
            </button>
          </div>
        )}
        {visibleCount >= aiVideos.length && aiVideos.length > 6 && (
          <div className="show-more-container">
            <button className="show-more-button" onClick={() => setVisibleCount(6)}>
              Show Less
            </button>
          </div>
        )}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            {isLoading && <div className="loading-spinner">Loading...</div>}
            <video
              controls
              autoPlay
              className="modal-video"
              onLoadedData={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                alert('Error loading video. Please check the filename.');
              }}
            >
              <source
                src={selectedVideo.url}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIVideoSection;

