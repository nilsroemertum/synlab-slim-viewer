import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface StudyProps {
    metadata: dmv.metadata.Study | dmv.metadata.SOPClass;
}
/**
 * React component representing a DICOM Study Information Entity that displays
 * common study-level attributes of contained DICOM Slide Microscopy images.
 */
declare class Study extends React.Component<StudyProps> {
    render(): React.ReactNode;
}
export default Study;
//# sourceMappingURL=Study.d.ts.map