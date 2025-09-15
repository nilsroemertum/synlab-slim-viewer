window.config = {
  // This must match the location configured for web server
  path: '/',
  servers: [
    {
      id: 'example',
      // This must match the proxy location configured for the DICOMweb server
      url:"https://healthcare.googleapis.com/v1/projects/synlab-pacs-workflow/locations/europe-west3/datasets/synlab-healthcare-dataset/dicomStores/synlab-dicom-data-store/dicomWeb",
      write: false
    }
  ],
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
  annotations: [],
  // Logger configuration
  logger: {
    level: 'DEBUG', // DEBUG, LOG, WARN, ERROR, NONE
    enableInProduction: false,
    enableInDevelopment: true
  },
}
