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

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages.

### First Time Setup:

1. **Update Homepage** (if needed):
   - The `package.json` already has the homepage set to: `https://MafateehITBU.github.io/mafateeh-portf`
   - If your GitHub username or repo name is different, update it in `package.json`

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   This will:
   - Build your React app
   - Deploy it to the `gh-pages` branch
   - Make it available at `https://MafateehITBU.github.io/mafateeh-portf`

3. **Enable GitHub Pages** (if not already enabled):
   - Go to your GitHub repository: `https://github.com/MafateehITBU/mafateeh-portf`
   - Click on **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: **gh-pages** and folder: **/ (root)**
   - Click **Save**

4. **Access Your Site**:
   - Your site will be live at: `https://MafateehITBU.github.io/mafateeh-portf`
   - It may take a few minutes for the first deployment to go live

### Updating Your Site:

After making changes to your code:
```bash
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

## License

© 2024 Mafateeh IT & Media Solutions. All rights reserved.
