# Host Application Integration Example

## Complete Example for Your React App

Here's a complete example of how to integrate the SlimViewer into your host React application:

### 1. Install the library

```bash
npm install /path/to/slim-viewer-0.42.4.tgz
```

### 2. Main App Component

```typescript
// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { SlimViewer, AppConfig } from 'slim-viewer';
import 'slim-viewer/dist/index.css';

const config: AppConfig = {
  path: '/case',
  servers: [{
    id: 'example',
    url: 'https://healthcare.googleapis.com/v1/projects/synlab-pacs-workflow/locations/europe-west3/datasets/synlab-healthcare-dataset/dicomStores/synlab-dicom-data-store/dicomWeb',
    write: false
  }],
  oidc: {
    authority: "https://accounts.google.com",
    clientId: "62039621046-rt1fu02rnnfrlf2icjh2q1cmervka8au.apps.googleusercontent.com",
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

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Medical Dashboard</h1>
      <p>Welcome to the medical imaging dashboard.</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Available Cases</h2>
        <ul>
          <li>
            <Link to="/case/case-001/scan/scan-001.dcm">
              Case 001 - Scan 001
            </Link>
          </li>
          <li>
            <Link to="/case/case-002/scan/scan-002.dcm">
              Case 002 - Scan 002
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav style={{ 
          background: '#f0f0f0', 
          padding: '10px 20px',
          borderBottom: '1px solid #ccc'
        }}>
          <Link to="/" style={{ marginRight: '20px' }}>Dashboard</Link>
          <Link to="/case/case-001/scan/scan-001.dcm">View Case 001</Link>
        </nav>
        
        <main style={{ flex: 1, overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
            {/* SlimViewer route - captures all subpaths */}
            <Route 
              path="/case/:caseId/scan/:scanFileName/*" 
              element={
                <SlimViewer 
                  config={config}
                  onStudySelect={(studyId) => {
                    console.log('Selected study:', studyId);
                    // You can navigate to other parts of your app here
                  }}
                  onError={(error) => {
                    console.error('Viewer error:', error);
                    // Handle errors in your app
                  }}
                  style={{ height: '100%' }}
                />
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### 3. Package.json dependencies

Make sure your host app has the required peer dependencies:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "antd": "^4.22.8",
    "slim-viewer": "file:./slim-viewer-0.42.4.tgz"
  }
}
```

### 4. How it works

1. **Host Router**: Your app owns the main `BrowserRouter`
2. **Route Delegation**: The route `/case/:caseId/scan/:scanFileName/*` delegates to SlimViewer
3. **Parameter Access**: SlimViewer receives `caseId` and `scanFileName` via `useParams()`
4. **Internal Navigation**: SlimViewer handles its own internal routes relative to the base path
5. **No Router Conflicts**: No nested routers, so no "Router inside Router" errors

### 5. URL Examples

- Dashboard: `http://localhost:3000/`
- Case viewer: `http://localhost:3000/case/case-001/scan/scan-001.dcm/`
- Study view: `http://localhost:3000/case/case-001/scan/scan-001.dcm/studies/1.2.3.4.5/`
- Annotations: `http://localhost:3000/case/case-001/scan/scan-001.dcm/studies/1.2.3.4.5/annotations/`

### 6. Accessing Route Parameters

If you need to access the route parameters in your SlimViewer or other components:

```typescript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { caseId, scanFileName } = useParams();
  
  console.log('Case ID:', caseId);
  console.log('Scan File:', scanFileName);
  
  return <div>Viewing case {caseId}, scan {scanFileName}</div>;
}
```

This approach gives you complete control over the routing while allowing the SlimViewer to handle its internal navigation seamlessly.
