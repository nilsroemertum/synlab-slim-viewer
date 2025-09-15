import DicomWebManager from '../DicomWebManager';
import { Slide } from '../data/slides';
interface UseSlidesProps {
    clients?: {
        [key: string]: DicomWebManager;
    };
    studyInstanceUID?: string;
}
interface UseSlidesReturn {
    slides: Slide[];
    isLoading: boolean;
    error: Error | null;
}
export declare const clearSlidesCache: (studyInstanceUID?: string) => void;
export declare const getCachedSlides: (studyInstanceUID: string) => Slide[] | undefined;
export declare const isSlidesCached: (studyInstanceUID: string) => boolean;
/**
 * Hook to fetch and manage whole slide microscopy images for a given study.
 * Values are cached so they can be reused if props are not provided.
 * If no arguments are provided, returns the most recently cached slides.
 *
 * @param props - Hook configuration props (optional)
 * @param props.clients - Map of DICOM web clients keyed by storage class
 * @param props.studyInstanceUID - Study instance UID to fetch slides for
 */
export declare const useSlides: ({ clients, studyInstanceUID }?: UseSlidesProps) => UseSlidesReturn;
export {};
//# sourceMappingURL=useSlides.d.ts.map