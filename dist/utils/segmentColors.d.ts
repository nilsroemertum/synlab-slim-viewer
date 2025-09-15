/**
 * Utility functions for handling segment colors
 */
/**
 * Convert RGB values to hex color string
 */
export declare const rgbToHex: (rgb: number[]) => string;
/**
 * Convert hex color string to RGB values
 */
export declare const hexToRgb: (hex: string) => number[];
/**
 * Check if a color is light or dark for determining text contrast
 */
export declare const isLightColor: (rgb: number[]) => boolean;
/**
 * Get contrasting text color (black or white) for a given background color
 */
export declare const getContrastColor: (rgb: number[]) => number[];
/**
 * Extract color hints from DICOM segment metadata
 * Looks for RecommendedDisplayCIELabValue in the Segment Sequence
 */
export declare const extractSegmentColorFromMetadata: (segmentMetadata: Record<string, unknown>, segmentNumber: number) => number[] | null;
/**
 * Get the best color for a segment, either from DICOM metadata or generated
 */
export declare const getSegmentColor: (segmentMetadata: Record<string, unknown>, segmentNumber: number) => number[] | null;
/**
 * Get segmentation type from metadata
 * Returns the SegmentationType from DICOM metadata or defaults to 'BINARY'
 */
export declare const getSegmentationType: (segmentMetadata: Record<string, unknown> | undefined | null) => string;
//# sourceMappingURL=segmentColors.d.ts.map