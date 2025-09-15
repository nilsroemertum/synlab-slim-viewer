import React from 'react';
import type { SelectProps } from 'antd';
import * as dmv from 'dicom-microscopy-viewer';
import * as dcmjs from 'dcmjs';
interface AnnotationGroupItemProps {
    annotationGroup: dmv.annotation.AnnotationGroup;
    isVisible: boolean;
    metadata: dmv.metadata.MicroscopyBulkSimpleAnnotations;
    defaultStyle: {
        opacity: number;
        color: number[];
    };
    onAnnotationGroupClick: (annotationGroupUID: string) => void;
    onVisibilityChange: ({ annotationGroupUID, isVisible }: {
        annotationGroupUID: string;
        isVisible: boolean;
    }) => void;
    onStyleChange: ({ uid, styleOptions }: {
        uid: string;
        styleOptions: {
            opacity?: number;
            color?: number[];
            limitValues?: number[];
            measurement?: dcmjs.sr.coding.CodedConcept;
        };
    }) => void;
}
interface AnnotationGroupItemState {
    isVisible: boolean;
    currentStyle: {
        opacity: number;
        color?: number[];
        limitValues?: number[];
        measurement?: dcmjs.sr.coding.CodedConcept;
    };
}
/**
 * React component representing an Annotation Group.
 */
declare class AnnotationGroupItem extends React.Component<AnnotationGroupItemProps, AnnotationGroupItemState> {
    constructor(props: AnnotationGroupItemProps);
    handleVisibilityChange: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
    handleColorChange: (color: number[]) => void;
    handleOpacityChange: (opacity: number | null) => void;
    getCurrentColor: () => string;
    handleLowerLimitChange: (value: number | null) => void;
    handleUpperLimitChange: (value: number | null) => void;
    handleLimitChange: (values: number[]) => void;
    handleAnnotationGroupClick: () => void;
    handleMeasurementSelection: SelectProps['onChange'];
    render(): React.ReactNode;
}
export default AnnotationGroupItem;
//# sourceMappingURL=AnnotationGroupItem.d.ts.map