import * as dmv from 'dicom-microscopy-viewer';
interface SlideOptions {
    images: dmv.metadata.VLWholeSlideMicroscopyImage[];
    description?: string;
}
/**
 * Slide - collection of images with the same Frame of Reference UID and
 * Container Identifier.
 */
declare class Slide {
    readonly description: string;
    readonly acquisitionUID: string | null | undefined;
    readonly frameOfReferenceUID: string;
    readonly containerIdentifier: string;
    readonly seriesInstanceUIDs: string[];
    readonly opticalPathIdentifiers: string[];
    readonly pyramidUIDs: string[];
    readonly areVolumeImagesMonochrome: boolean;
    readonly volumeImages: dmv.metadata.VLWholeSlideMicroscopyImage[];
    readonly labelImages: dmv.metadata.VLWholeSlideMicroscopyImage[];
    readonly overviewImages: dmv.metadata.VLWholeSlideMicroscopyImage[];
    /**
     * @param options
     * @param options.images - Metadata of images associated with the slide
     * @param options.description - Description of the slide
     */
    constructor(options: SlideOptions);
}
/**
 * Create slides.
 *
 * @param imagesPerSeries - Image instances grouped per series
 * @param referenceSeriesInstanceUID - Unique identifier of the series that serves as a reference for the slide
 * @returns Slides
 */
declare const createSlides: (images: dmv.metadata.VLWholeSlideMicroscopyImage[][]) => Slide[];
export { Slide, createSlides };
//# sourceMappingURL=slides.d.ts.map