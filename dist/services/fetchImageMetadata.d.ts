import DicomWebManager from '../DicomWebManager';
import { Slide } from '../data/slides';
interface FetchImageMetadataParams {
    clients: {
        [key: string]: DicomWebManager;
    };
    studyInstanceUID: string;
    onSuccess: (slides: Slide[]) => void;
    onError: (error: Error) => void;
}
export declare const fetchImageMetadata: ({ clients, studyInstanceUID, onSuccess, onError }: FetchImageMetadataParams) => Promise<void>;
export {};
//# sourceMappingURL=fetchImageMetadata.d.ts.map