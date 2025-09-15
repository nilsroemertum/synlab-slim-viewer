import * as dmv from 'dicom-microscopy-viewer';
import * as dwc from 'dicomweb-client';
import { Slide } from '../../../data/slides';
/**
 * Constructs volume and label viewers for the slide
 */
export declare const constructViewers: ({ clients, slide, preload }: {
    clients: {
        [key: string]: dwc.api.DICOMwebClient;
    };
    slide: Slide;
    preload?: boolean | undefined;
}) => {
    volumeViewer: dmv.viewer.VolumeImageViewer;
    labelViewer?: dmv.viewer.LabelImageViewer;
};
/**
 * Checks if a report implements TID1500
 */
export declare const implementsTID1500: (report: dmv.metadata.Comprehensive3DSR) => boolean;
/**
 * Checks if a report describes a specimen subject
 */
export declare const describesSpecimenSubject: (report: dmv.metadata.Comprehensive3DSR) => boolean;
/**
 * Checks if a report contains appropriate graphic ROI annotations.
 */
export declare const containsROIAnnotations: (report: dmv.metadata.Comprehensive3DSR) => boolean;
//# sourceMappingURL=viewerUtils.d.ts.map