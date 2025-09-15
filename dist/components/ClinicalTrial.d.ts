import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface ClinicalTrialProps {
    metadata: dmv.metadata.SOPClass;
}
/**
 * React component representing a DICOM ClinicalTrial Information Entity that displays
 * common study-level attributes of contained DICOM Slide Microscopy images.
 */
declare class ClinicalTrial extends React.Component<ClinicalTrialProps> {
    render(): React.ReactNode;
}
export default ClinicalTrial;
//# sourceMappingURL=ClinicalTrial.d.ts.map