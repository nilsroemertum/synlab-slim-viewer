import * as dmv from 'dicom-microscopy-viewer';
declare function parseName(value: dmv.metadata.PersonName | null | undefined): string;
declare function parseDate(value: string | null | undefined): string;
declare function parseTime(value: string | null | undefined): string;
declare function parseDateTime(value: string | null | undefined): string;
declare function parseSex(value: string | null | undefined): string;
export { parseDate, parseDateTime, parseName, parseSex, parseTime };
//# sourceMappingURL=values.d.ts.map