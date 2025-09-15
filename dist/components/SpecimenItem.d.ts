import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface SpecimenItemProps {
    index: number;
    metadata?: dmv.metadata.VLWholeSlideMicroscopyImage;
    showstain: boolean;
}
/**
 * React component representing a DICOM Specimen Information Entity and
 * displays specimen-related attributes of a DICOM Slide Microscopy image.
 */
declare class SpecimenItem extends React.Component<SpecimenItemProps, {}> {
    render(): React.ReactNode;
}
export default SpecimenItem;
//# sourceMappingURL=SpecimenItem.d.ts.map