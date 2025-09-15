// Import CSS
import './slim-viewer.css';

// Main component
export { default as SlimViewer } from './SlimViewer';
export { default } from './SlimViewer';

// Types and interfaces
export * from './AppConfig';
export * from './types';

// Re-export commonly used types
export type { AppConfig } from './AppConfig';
export type { ServerSettings, OidcSettings, AnnotationSettings } from './AppConfig';

// Re-export components that might be useful
export { default as CaseViewer } from './components/CaseViewer';
export { default as SlideViewer } from './components/SlideViewer';
export { default as Worklist } from './components/Worklist';
