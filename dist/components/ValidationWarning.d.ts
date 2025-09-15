import React from 'react';
import { Slide } from '../data/slides';
import * as dmv from 'dicom-microscopy-viewer';
interface ValidationWarningProps {
    annotationGroup?: dmv.annotation.AnnotationGroup;
    onEvent?: () => void;
    slide?: Slide;
    iconColor?: string;
    iconSize?: string;
    style?: React.CSSProperties;
    position?: {
        top?: string;
        right?: string;
    };
}
declare const ValidationWarning: React.FC<ValidationWarningProps>;
export default ValidationWarning;
//# sourceMappingURL=ValidationWarning.d.ts.map