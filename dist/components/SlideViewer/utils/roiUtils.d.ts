import * as dmv from 'dicom-microscopy-viewer';
/**
 * Builds a key for a concept based on its coding scheme and value
 */
export declare const buildKey: (concept: {
    CodeValue: string;
    CodeMeaning: string;
    CodingSchemeDesignator: string;
    CodingSchemeVersion?: string;
}) => string;
/**
 * Gets the ROI key from a ROI object
 */
export declare const getRoiKey: (roi: dmv.roi.ROI) => string | undefined;
/**
 * Compares two ROIs for equality based on their spatial coordinates
 */
export declare const areROIsEqual: (a: dmv.roi.ROI, b: dmv.roi.ROI) => boolean;
/**
 * Formats ROI style options
 */
export declare const formatRoiStyle: (style: {
    stroke?: {
        color?: number[] | undefined;
        width?: number | undefined;
    } | undefined;
    fill?: {
        color?: number[] | undefined;
    } | undefined;
    radius?: number | undefined;
}) => dmv.viewer.ROIStyleOptions;
//# sourceMappingURL=roiUtils.d.ts.map