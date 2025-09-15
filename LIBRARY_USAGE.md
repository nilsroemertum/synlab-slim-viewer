# SlimViewer Library Usage - Router Integration

## Overview

The SlimViewer library is designed to work with your host application's router. It uses relative routing to avoid the "Router inside Router" error. The host application owns the router and delegates subpaths to the SlimViewer component.

## Installation

### Option 1: Install from local package
```bash
# In your other webapp directory
npm install /path/to/slim-viewer-0.42.4.tgz
```

### Option 2: Use npm link for development
```bash
# In the slim-viewer directory
npm link

# In your other webapp directory
npm link slim-viewer
```

## Host Application Router Configuration

### 1. Set up the main route in your host app

> **Note**: The SlimViewer automatically preserves the current URL path during OIDC authentication and uses relative routing for internal navigation. When users visit `/case/CASE-001/scan/breast_biopsy_scan_002.svs`, they will be redirected back to the same URL after authentication, and clicking on studies will navigate to `/case/CASE-001/scan/breast_biopsy_scan_002.svs/studies/...` instead of just `/studies/...`.

```typescript
// In your main App.tsx or router configuration
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SlimViewer, AppConfig } from 'slim-viewer';
import 'slim-viewer/dist/index.css';

const config: AppConfig = {
  path: '/case', // This should match your base path
  servers: [{
    id: 'your-server',
    url: 'https://your-dicom-server.com/dicomWeb',
    write: false
  }],
  oidc: {
    authority: "https://accounts.google.com",
    clientId: "your-client-id",
    scope: "email profile openid https://www.googleapis.com/auth/cloud-healthcare",
    grantType: "implicit"
  },
  disableWorklist: false,
  disableAnnotationTools: false,
  showLeftCaseSider: true,
  showRightSlideViewerSidebar: true,
  showHeaderInSlideViewer: true,
  enableServerSelection: false,
  mode: 'light',
  preload: true,
  annotations: []
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your other routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* SlimViewer route with splat to capture all subpaths */}
        <Route 
          path="/case/:caseId/scan/:scanFileName/*" 
          element={
            <div style={{ height: '100vh' }}>
              <SlimViewer 
                config={config}
                onStudySelect={(studyId) => console.log('Selected study:', studyId)}
                onError={(error) => console.error('Viewer error:', error)}
                style={{ height: '100%' }}
              />
            </div>
          } 
        />
        
        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 2. Access route parameters in SlimViewer

The SlimViewer component automatically receives the route parameters from the host router:

- `caseId` - Available as `params.caseId`
- `scanFileName` - Available as `params.scanFileName`
- `studyInstanceUID` - Available as `params.studyInstanceUID` (for study-specific routes)

### 3. Internal navigation within SlimViewer

The SlimViewer uses relative routes, so all internal navigation works correctly:

- Worklist: `/case/123/scan/file.dcm/` (root of the viewer)
- Study view: `/case/123/scan/file.dcm/studies/1.2.3.4.5/`
- Annotations: `/case/123/scan/file.dcm/studies/1.2.3.4.5/annotations/`

## Route Structure

```
/case/:caseId/scan/:scanFileName/*
├── "" (empty path) → Worklist
├── studies/:studyInstanceUID/* → Study viewer
│   ├── "" → Study overview
│   ├── annotations → Annotations view
│   └── reports → Reports view
└── projects/:project/locations/:location/datasets/:dataset/dicomStores/:dicomStore/study/:studyInstanceUID/* → GCP study viewer
```

## Usage Examples

### Basic Integration

```typescript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SlimViewer, AppConfig } from 'slim-viewer';
import 'slim-viewer/dist/index.css';

const config: AppConfig = {
  path: '/case',
  servers: [{
    id: 'example',
    url: 'https://healthcare.googleapis.com/v1/projects/your-project/locations/europe-west3/datasets/your-dataset/dicomStores/your-store/dicomWeb',
    write: false
  }],
  // ... other config
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/case/:caseId/scan/:scanFileName/*" 
          element={<SlimViewer config={config} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
```

### With Navigation

```typescript
import { Link, useNavigate } from 'react-router-dom';

function CaseList() {
  const navigate = useNavigate();
  
  const openViewer = (caseId: string, scanFileName: string) => {
    navigate(`/case/${caseId}/scan/${scanFileName}`);
  };
  
  return (
    <div>
      <h1>Cases</h1>
      <button onClick={() => openViewer('case-123', 'scan-001.dcm')}>
        Open Case 123
      </button>
    </div>
  );
}
```

## Development Workflow

1. **Make changes** to the viewer
2. **Rebuild the library**: `yarn build:lib`
3. **Repackage**: `npm pack`
4. **Update in your other app**: `npm install /path/to/slim-viewer-0.42.4.tgz`

Or use npm link for easier development:
```bash
# In viewer directory
npm link

# In your other app directory  
npm link slim-viewer
```

## Available Scripts

- `yarn build:lib` - Build the library
- `yarn dev:lib` - Build library in watch mode
- `yarn rebuild` - Build library and create package
- `npm pack` - Create local package for installation

## Key Benefits

- ✅ No "Router inside Router" errors
- ✅ Clean separation of concerns
- ✅ Host app controls the main routing
- ✅ SlimViewer handles its internal navigation
- ✅ Easy integration with existing React apps
- ✅ Access to route parameters (caseId, scanFileName)
- ✅ Relative navigation works correctly

## Static Assets Setup

The DICOM microscopy viewer requires WASM files and other static assets to be accessible. You need to serve these files from your host application's public directory.

### Option A: Copy static assets to your public directory

```bash
# Copy the static assets to your public directory
cp -r node_modules/slim-viewer/dist/*.wasm public/
cp -r node_modules/slim-viewer/dist/*.js public/
```

### Option B: Configure your build system to serve static assets

If you're using Vite, add this to your `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import { copyFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  // ... your config
  plugins: [
    // ... your plugins
    {
      name: 'copy-slim-viewer-assets',
      buildStart() {
        const assets = [
          'dicomMicroscopyViewer.min.js',
          'dataLoader.worker.min.js',
          'charlswasm_decode.wasm',
          'dicomiccwasm.wasm',
          'libjpegturbowasm_decode.wasm',
          'openjpegwasm_decode.wasm'
        ]
        
        assets.forEach(asset => {
          copyFileSync(
            join('node_modules/slim-viewer/dist', asset),
            join('public', asset)
          )
        })
      }
    }
  ]
})
```

### Option C: Use a CDN or static file server

Make sure the following files are accessible at the root of your application:
- `dicomMicroscopyViewer.min.js`
- `dataLoader.worker.min.js`
- `charlswasm_decode.wasm`
- `dicomiccwasm.wasm`
- `libjpegturbowasm_decode.wasm`
- `openjpegwasm_decode.wasm`

## Troubleshooting

If you see a blank viewer or no images are displayed:

1. **Check browser console** for errors related to WASM files or static assets
2. **Verify static assets** are accessible at the root of your application
3. **Check network tab** to see if WASM files are being loaded successfully
4. **Ensure CORS** is properly configured if serving from a different domain
