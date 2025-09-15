import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface PatientProps {
    metadata: dmv.metadata.Study | dmv.metadata.SOPClass;
}
/**
 * React component representing a DICOM Patient Information Entity that
 * displays common study-level, patient-related attributes of contained
 * DICOM Slide Microscopy images.
 */
declare class Patient extends React.Component<PatientProps, {}> {
    render(): React.ReactNode;
}
export default Patient;
//# sourceMappingURL=Patient.d.ts.map