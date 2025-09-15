import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface AnnotationListProps {
    rois: dmv.roi.ROI[];
    selectedRoiUIDs: Set<string>;
    visibleRoiUIDs: Set<string>;
    onVisibilityChange: ({ roiUID, isVisible }: {
        roiUID: string;
        isVisible: boolean;
    }) => void;
    onSelection: (uid: string) => void;
}
/**
 * React component representing a list of Region of Interest (ROI)
 * annotations.
 */
declare class AnnotationList extends React.Component<AnnotationListProps, {}> {
    constructor(props: AnnotationListProps);
    handleVisibilityChange(checked: boolean, event: React.MouseEvent<HTMLButtonElement>): void;
    handleMenuItemSelection(object: any): void;
    render(): React.ReactNode;
}
export default AnnotationList;
//# sourceMappingURL=AnnotationList.d.ts.map