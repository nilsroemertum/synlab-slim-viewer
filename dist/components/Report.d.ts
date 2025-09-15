import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
import * as dcmjs from 'dcmjs';
export declare const hasValueType: (item: dcmjs.sr.valueTypes.ContentItem, valueType: string) => boolean;
declare class MeasurementReport {
    PersonObserverName?: string;
    PersonObserverLoginName?: string;
    DeviceObserverUID?: string;
    DeviceObserverName?: string;
    SpecimenUID: string;
    SpecimenIdentifier: string;
    ContainerIdentifier: string;
    ROIs: dmv.roi.ROI[];
    constructor(report: dmv.metadata.Comprehensive3DSR);
}
interface ReportProps {
    dataset: dmv.metadata.Comprehensive3DSR;
}
/**
 * React component representing a DICOM SR document that displays the
 * document content (a selected subset of content items).
 */
declare class Report extends React.Component<ReportProps, {}> {
    render(): React.ReactNode;
}
export default Report;
export { MeasurementReport };
//# sourceMappingURL=Report.d.ts.map