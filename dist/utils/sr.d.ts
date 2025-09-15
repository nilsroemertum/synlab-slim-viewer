import * as dcmjs from 'dcmjs';
/**
 * Find content items in a DICOM SR document given their name.
 *
 * Only finds content items at the root level, but not any nested content items.
 *
 * @param content - Document content, i.e., sequence of content items
 * @param name - Coded name that should be compared
 * @returns Matched content items
 */
export declare const findContentItemsByName: ({ content, name }: {
    content: dcmjs.sr.valueTypes.ContentItem[];
    name: dcmjs.sr.coding.CodedConcept;
}) => dcmjs.sr.valueTypes.ContentItem[];
/**
 * Find content items in a DICOM SR document given their value type.
 *
 * Only finds content items at the root level, but not any nested content items.
 *
 * @param content - Document content, i.e., sequence of content items
 * @param valueType - Value Type
 * @returns Matched content items
 */
export declare const findContentItemsByValueType: ({ content, valueType }: {
    content: dcmjs.sr.valueTypes.ContentItem[];
    valueType: dcmjs.sr.valueTypes.ValueTypes;
}) => dcmjs.sr.valueTypes.ContentItem[];
//# sourceMappingURL=sr.d.ts.map