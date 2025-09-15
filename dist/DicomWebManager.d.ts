import * as dwc from 'dicomweb-client';
import { ServerSettings, DicomWebManagerErrorHandler } from './AppConfig';
import { Instance } from './services/DICOMMetadataStore';
export default class DicomWebManager implements dwc.api.DICOMwebClient {
    private readonly stores;
    private readonly handleError;
    constructor({ baseUri, settings, onError }: {
        baseUri: string;
        settings: ServerSettings[];
        onError?: DicomWebManagerErrorHandler;
    });
    get baseURL(): string;
    updateHeaders: (fields: {
        [name: string]: string;
    }) => void;
    get headers(): {
        [name: string]: string;
    };
    storeInstances: (options: dwc.api.StoreInstancesOptions) => Promise<void>;
    searchForStudies: (options: dwc.api.SearchForStudiesOptions) => Promise<dwc.api.Study[]>;
    searchForSeries: (options: dwc.api.SearchForSeriesOptions) => Promise<dwc.api.Series[]>;
    searchForInstances: (options: dwc.api.SearchForInstancesOptions) => Promise<dwc.api.Instance[]>;
    retrieveStudyMetadata: (options: dwc.api.RetrieveStudyMetadataOptions) => Promise<dwc.api.Metadata[]>;
    retrieveSeriesMetadata: (options: dwc.api.RetrieveSeriesMetadataOptions) => Promise<dwc.api.Metadata[]>;
    retrieveInstanceMetadata: (options: dwc.api.RetrieveInstanceMetadataOptions) => Promise<dwc.api.Metadata[]>;
    retrieveInstance: (options: dwc.api.RetrieveInstanceOptions) => Promise<dwc.api.Dataset>;
    retrieveInstanceFrames: (options: dwc.api.RetrieveInstanceFramesOptions) => Promise<dwc.api.Pixeldata[]>;
    retrieveInstanceRendered: (options: dwc.api.RetrieveInstanceRenderedOptions) => Promise<dwc.api.Pixeldata>;
    retrieveInstanceFramesRendered: (options: dwc.api.RetrieveInstanceFramesRenderedOptions) => Promise<dwc.api.Pixeldata>;
    retrieveBulkData: (options: dwc.api.RetrieveBulkDataOptions) => Promise<dwc.api.Bulkdata[]>;
}
//# sourceMappingURL=DicomWebManager.d.ts.map