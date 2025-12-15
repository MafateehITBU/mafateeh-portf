# Mafateeh IT & Media Solutions - Portfolio

A modern, single-page portfolio showcasing the company's work in design, marketing, and video production.

## Features

- **Video Section**: Showcase regular video productions
- **AI Video Section**: Display AI-powered video creations
- **Social Media Portfolio**: Filterable gallery by sector (Medical, Service, Food, Products, Industrial)
- **Modern Design**: Sleek, responsive UI with smooth animations
- **Cloudinary Integration**: All media loaded from Cloudinary cloud storage

## Color Scheme

- **CTA Color**: `#157037` (Green)
- **Button Color**: `#e4bc47` (Gold/Yellow)
- **Background 1**: `#ffffff` (White)
- **Background 2**: `#fafafa` (Light Gray)

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Cloudinary Configuration

The portfolio is configured to use Cloudinary with:
- **Cloud Name**: `dodz4hnzc`
- **Base Path**: `Home/Mafateeh/`

### Folder Structure in Cloudinary:
```
Home/Mafateeh/
├── Video/
├── AI Video/
└── Social media post/
    ├── Medical/
    ├── Services/
    ├── Food/
    ├── Products/
    └── Industrial/
```

## Adding Media Files

To display your videos and images, add them to the components with their full Cloudinary URLs.

### Video URLs Format
```
https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010331/billboard4_wu5nsc.mp4
```

### Image URLs Format
```
https://res.cloudinary.com/dodz4hnzc/image/upload/v1764010331/image-name.jpg
```

### Example Usage

**In VideoSection.js:**
```javascript
const videos = [
  { 
    id: 1, 
    url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010331/billboard4_wu5nsc.mp4',
    thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010331/billboard4_wu5nsc.mp4',
    title: 'Video Title' 
  },
  // Add more videos...
];
```

**In AIVideoSection.js:**
```javascript
const aiVideos = [
  { 
    id: 1, 
    url: 'https://res.cloudinary.com/dodz4hnzc/video/upload/v1764010331/ai-video.mp4',
    thumbnail: 'https://res.cloudinary.com/dodz4hnzc/video/upload/so_0/v1764010331/ai-video.mp4',
    title: 'AI Video Title' 
  },
  // Add more AI videos...
];
```

**In SocialMediaSection.js:**
```javascript
case 'medical':
  return [
    { 
      id: 1, 
      url: 'https://res.cloudinary.com/dodz4hnzc/image/upload/v1764010331/medical-post.jpg',
      title: 'Medical Post 1' 
    },
    // Add more posts...
  ];
```

### Getting Cloudinary URLs

1. Go to your [Cloudinary Media Library](https://cloudinary.com/console/media_library)
2. Click on any video or image
3. Copy the **Delivery URL** (the full URL with version parameter)
4. Paste it into the component arrays

### Folder Structure in Cloudinary:
```
Home/Mafateeh/
├── Video/
├── AI Video/
└── Social media post/
    ├── Medical/
    ├── Services/
    ├── Food/
    ├── Products/
    └── Industrial/
```

## Technologies Used

- React 18.2.0
- CSS3 (Custom styling)
- Cloudinary (Media hosting)
- Inter Font (Google Fonts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Mafateeh IT & Media Solutions. All rights reserved.
