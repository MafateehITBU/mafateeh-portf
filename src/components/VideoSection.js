import React, { useState } from "react";

const VideoSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Add your videos with full Cloudinary URLs
  const videos = [
    {
      id: 4,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984417/paper_cup_pqbqfq.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_9/paper_cup_pqbqfq.jpg',
      title: 'Video 4'
    },
    {
      id: 10,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984406/From_App_to_Application_bvfycv.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/From_App_to_Application_bvfycv.jpg',
      title: 'Video 10'
    },
    {
      id: 11,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984403/How_to_use_RZ_Application_fare9g.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/How_to_use_RZ_Application_fare9g.jpg',
      title: 'Video 11'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984423/%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD_%D9%85%D9%88%D8%A7%D9%82%D8%B9_%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9_qlmbx1.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD_%D9%85%D9%88%D8%A7%D9%82%D8%B9_%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9_qlmbx1.jpg',
      title: 'Video 3'
    },
    {
      id: 7,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984413/mouse_2_esrs0e.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/mouse_2_esrs0e.jpg',
      title: 'Video 7'
    },
    {
      id: 16,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1765704640/%D8%A7%D9%84%D8%A7%D9%85%D8%AA%D8%AB%D8%A7%D9%84_jxmkpi.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_9/v1765704640/%D8%A7%D9%84%D8%A7%D9%85%D8%AA%D8%AB%D8%A7%D9%84_jxmkpi.jpg',
      title: 'Video 16'
    },
    { 
      id: 1, 
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984417/Power_Supply_V2_utxjua.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/Power_Supply_V2_utxjua.jpg',
      title: 'Video 1' 
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984438/%D9%83%D9%8A%D8%B3_%D8%A7%D8%B1_%D8%B2%D9%8A_2_jj9kcz.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/%D9%83%D9%8A%D8%B3_%D8%A7%D8%B1_%D8%B2%D9%8A_2_jj9kcz.jpg',
      title: 'Video 2'
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984414/Employees_gwr1s8.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_15/Employees_gwr1s8.jpg',
      title: 'Video 5'
    },
    {
      id: 6,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984414/black_friday_kifien.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/black_friday_kifien.jpg',
      title: 'Video 6'
    },
    {
      id: 8,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984412/%D8%AA%D9%86%D8%B8%D9%8A%D9%81_%D8%A7%D9%84%D8%AC%D9%8A%D8%B1_nujtdc.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/%D8%AA%D9%86%D8%B8%D9%8A%D9%81_%D8%A7%D9%84%D8%AC%D9%8A%D8%B1_nujtdc.jpg',
      title: 'Video 8'
    },
    {
      id: 9,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984407/%D8%B9%D8%B1%D8%B6_%D8%AA%D9%82%D9%88%D9%8A%D9%85_%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86_%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D9%81_2_1_gdrriu.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/%D8%B9%D8%B1%D8%B6_%D8%AA%D9%82%D9%88%D9%8A%D9%85_%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86_%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D9%81_2_1_gdrriu.jpg',
      title: 'Video 9'
    },
    
    {
      id: 12,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984400/WhatsApp_Video_2025-11-24_at_11.38.14_AM_gajdgz.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/WhatsApp_Video_2025-11-24_at_11.38.14_AM_gajdgz.jpg',
      title: 'Video 12'
    },
    {
      id: 13,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984399/WhatsApp_Video_2025-11-24_at_12.03.06_PM_hmv9zy.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_9/WhatsApp_Video_2025-11-24_at_12.03.06_PM_hmv9zy.jpg',
      title: 'Video 13'
    },
    {
      id: 14,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984398/%D8%B1%D9%8A%D9%84_%D8%B5%D8%A7%D8%A8%D9%88%D9%86_%D9%85%D8%BA%D8%B1%D8%A8%D9%8A_final_cyfrbw.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_5/%D8%B1%D9%8A%D9%84_%D8%B5%D8%A7%D8%A8%D9%88%D9%86_%D9%85%D8%BA%D8%B1%D8%A8%D9%8A_final_cyfrbw.jpg',
      title: 'Video 14'
    },
    {
      id: 15,
      url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1763984396/macadima_4_products_xpkmge.mp4',
      thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_9/macadima_4_products_xpkmge.jpg',
      title: 'Video 15'
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
    <section id="videos" className="video-section">
      <div className="section-container">

        <div className="section-header">
          <h2 className="section-title">Our Video Productions</h2>
          <p className="section-subtitle">
            Captivating visual stories that engage and inspire your audience
          </p>
        </div>

        {/* GRID */}
        <div className="video-grid">
          {videos.slice(0, visibleCount).map((video) => (
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
                    e.target.src = 'https://via.placeholder.com/400x300?text=Video+Thumbnail';
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
              </div>
              
            </div>
          ))}
        </div>

        {/* SHOW MORE / LESS */}
        {videos.length > 6 && visibleCount < videos.length && (
          <div className="show-more-container">
            <button
              className="show-more-button"
              onClick={() => setVisibleCount(videos.length)}
            >
              Show More
            </button>
          </div>
        )}

        {visibleCount >= videos.length && videos.length > 6 && (
          <div className="show-more-container">
            <button
              className="show-more-button"
              onClick={() => setVisibleCount(6)}
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              ×
            </button>

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

export default VideoSection;