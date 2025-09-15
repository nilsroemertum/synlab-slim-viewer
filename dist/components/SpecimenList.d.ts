import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface SpecimenListProps {
    metadata?: dmv.metadata.VLWholeSlideMicroscopyImage;
    showstain: boolean;
}
/**
 * React component representing a list of DICOM Specimen Information Entities.
 */
declare class SpecimenList extends React.Component<SpecimenListProps, {}> {
    render(): React.ReactNode;
}
export default SpecimenList;
//# sourceMappingURL=SpecimenList.d.ts.map