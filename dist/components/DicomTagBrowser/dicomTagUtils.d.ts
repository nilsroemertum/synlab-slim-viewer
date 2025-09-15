interface TagInfo {
    tag: string;
    vr: string;
    keyword: string;
    value: string;
    children?: TagInfo[];
    level: number;
}
export interface DicomTag {
    name: string;
    vr: string;
    Value?: any[];
    [key: string]: any;
}
export declare const formatTagValue: (tag: DicomTag) => string;
/**
 * Processes DICOM metadata and returns a flattened array of tag information
 * @param metadata - The DICOM metadata object to process
 * @param depth - The current depth level for nested sequences (default: 0)
 * @returns Array of processed tag information
 */
export declare function getRows(metadata: Record<string, any>, depth?: number): TagInfo[];
/**
 * Sorts DICOM tags alphabetically by tag value
 * @param metadata - The DICOM metadata object to process
 * @returns Sorted array of tag information
 */
export declare function getSortedTags(metadata: Record<string, any>): TagInfo[];
export {};
//# sourceMappingURL=dicomTagUtils.d.ts.map