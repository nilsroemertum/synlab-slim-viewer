import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface AnnotationItemProps {
    roi: dmv.roi.ROI;
    index: number;
    isVisible: boolean;
    onVisibilityChange: ({ roiUID, isVisible }: {
        roiUID: string;
        isVisible: boolean;
    }) => void;
}
/**
 * React component representing a Region of Interest (ROI) annotation.
 */
declare class AnnotationItem extends React.Component<AnnotationItemProps, {}> {
    constructor(props: AnnotationItemProps);
    handleVisibilityChange(checked: boolean, event: React.MouseEvent<HTMLButtonElement>): void;
    render(): React.ReactNode;
}
export default AnnotationItem;
//# sourceMappingURL=AnnotationItem.d.ts.map