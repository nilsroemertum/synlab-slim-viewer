import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface SegmentListProps {
    segments: dmv.segment.Segment[];
    visibleSegmentUIDs: Set<string>;
    metadata: {
        [segmentUID: string]: dmv.metadata.Segmentation[];
    };
    defaultSegmentStyles: {
        [segmentUID: string]: {
            opacity: number;
            color?: number[];
        };
    };
    onSegmentVisibilityChange: ({ segmentUID, isVisible }: {
        segmentUID: string;
        isVisible: boolean;
    }) => void;
    onSegmentStyleChange: ({ segmentUID, styleOptions }: {
        segmentUID: string;
        styleOptions: {
            opacity: number;
            color?: number[];
        };
    }) => void;
}
/**
 * React component representing a list of Segments.
 */
declare class SegmentList extends React.Component<SegmentListProps, {}> {
    render(): React.ReactNode;
}
export default SegmentList;
//# sourceMappingURL=SegmentList.d.ts.map