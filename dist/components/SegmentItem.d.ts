import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface SegmentItemProps {
    segment: dmv.segment.Segment;
    isVisible: boolean;
    metadata: dmv.metadata.Segmentation[];
    defaultStyle: {
        opacity: number;
        color?: number[];
    };
    onVisibilityChange: ({ segmentUID, isVisible }: {
        segmentUID: string;
        isVisible: boolean;
    }) => void;
    onStyleChange: ({ segmentUID, styleOptions }: {
        segmentUID: string;
        styleOptions: {
            opacity: number;
            color?: number[];
        };
    }) => void;
}
interface SegmentItemState {
    isVisible: boolean;
    currentStyle: {
        opacity: number;
        color: number[];
    };
}
/**
 * React component representing a Segment.
 */
declare class SegmentItem extends React.Component<SegmentItemProps, SegmentItemState> {
    constructor(props: SegmentItemProps);
    handleVisibilityChange: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
    handleColorChange: (newColor: number[]) => void;
    handleOpacityChange: (opacity: number | null) => void;
    render(): React.ReactNode;
}
export default SegmentItem;
//# sourceMappingURL=SegmentItem.d.ts.map