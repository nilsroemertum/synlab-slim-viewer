/**
 * Formats a DICOM datetime string (YYYYMMDD:HHmmss) into a human-readable format
 *
 * @param dateStr - DICOM datetime string in format "YYYYMMDD:HHmmss"
 * @returns Formatted date string (e.g., "Mon, Jan 1 2024")
 * @example
 * formatDicomDate("20240101:120000") // Returns "Mon, Jan 1 2024"
 * formatDicomDate("invalid") // Returns "invalid"
 */
export declare const formatDicomDate: (dateStr: string) => string;
//# sourceMappingURL=formatDicomDate.d.ts.map