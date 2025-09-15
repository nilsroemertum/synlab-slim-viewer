import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
import * as dcmjs from 'dcmjs';
interface AnnotationGroupListProps {
    annotationGroups: dmv.annotation.AnnotationGroup[];
    visibleAnnotationGroupUIDs: Set<string>;
    metadata: {
        [annotationGroupUID: string]: dmv.metadata.MicroscopyBulkSimpleAnnotations;
    };
    defaultAnnotationGroupStyles: {
        [annotationGroupUID: string]: {
            opacity: number;
            color: number[];
        };
    };
    onAnnotationGroupClick: (annotationGroupUID: string) => void;
    onAnnotationGroupVisibilityChange: ({ annotationGroupUID, isVisible }: {
        annotationGroupUID: string;
        isVisible: boolean;
    }) => void;
    onAnnotationGroupStyleChange: ({ uid, styleOptions }: {
        uid: string;
        styleOptions: {
            opacity?: number;
            color?: number[];
            measurement?: dcmjs.sr.coding.CodedConcept;
        };
    }) => void;
}
/**
 * React component representing a list of Annotation Groups.
 */
declare class AnnotationGroupList extends React.Component<AnnotationGroupListProps, unknown> {
    handleVisibilityChange: (checked: boolean) => void;
    render(): React.ReactNode;
}
export default AnnotationGroupList;
//# sourceMappingURL=AnnotationGroupList.d.ts.map