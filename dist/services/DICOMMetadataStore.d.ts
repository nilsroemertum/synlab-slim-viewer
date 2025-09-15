export declare const EVENTS: {
    STUDY_ADDED: string;
    INSTANCES_ADDED: string;
    SERIES_ADDED: string;
    SERIES_UPDATED: string;
};
export interface Instance {
    SOPInstanceUID: string;
    SOPClassUID: string;
    Rows: number;
    Columns: number;
    PatientSex: string;
    Modality: string;
    InstanceNumber: string;
    imageId?: string;
    [key: string]: any;
}
export interface Series {
    Modality: string;
    SeriesInstanceUID: string;
    SeriesNumber: number;
    SeriesDate: string;
    SeriesTime: string;
    SeriesDescription: string;
    instances: Instance[];
    addInstance: (newInstance: Instance) => void;
    addInstances: (newInstances: Instance[]) => void;
    getInstance: (SOPInstanceUID: string) => Instance | undefined;
}
export interface Study {
    StudyInstanceUID: string;
    StudyDescription: string;
    PatientID: string;
    PatientName: string;
    StudyDate: string;
    AccessionNumber: string;
    NumInstances: number;
    ModalitiesInStudy: any[];
    NumberOfStudyRelatedSeries?: number;
    isLoaded: boolean;
    series: Series[];
    addInstanceToSeries: (instance: Instance) => void;
    addInstancesToSeries: (instances: Instance[]) => void;
    setSeriesMetadata: (SeriesInstanceUID: string, metadata: any) => void;
}
declare function _getStudyInstanceUIDs(): string[];
declare function _getStudy(StudyInstanceUID: string): Study | undefined;
declare function _getSeries(StudyInstanceUID: string, SeriesInstanceUID: string): Series | undefined;
declare function _getInstance(StudyInstanceUID: string, SeriesInstanceUID: string, SOPInstanceUID: string): Instance | undefined;
declare function _getInstanceByImageId(imageId: string): Instance | undefined;
/**
 * Update the metadata of a specific series
 * @param {*} StudyInstanceUID
 * @param {*} SeriesInstanceUID
 * @param {*} metadata metadata inform of key value pairs
 * @returns
 */
declare function _updateMetadataForSeries(StudyInstanceUID: string, SeriesInstanceUID: string, metadata: Record<string, any>): void;
interface BaseImplementationType {
    EVENTS: typeof EVENTS;
    listeners: Record<string, any>;
    addInstance: (dicomJSONDatasetOrP10ArrayBuffer: ArrayBuffer | Record<string, any>) => void;
    addInstances: (instances: Instance[], madeInClient?: boolean) => void;
    updateSeriesMetadata: (seriesMetadata: Record<string, any>) => void;
    addSeriesMetadata: (seriesSummaryMetadata: Array<Record<string, any>>, madeInClient?: boolean) => void;
    addStudy: (study: Record<string, any>) => void;
    getStudyInstanceUIDs: typeof _getStudyInstanceUIDs;
    getStudy: typeof _getStudy;
    getSeries: typeof _getSeries;
    getInstance: typeof _getInstance;
    getInstanceByImageId: typeof _getInstanceByImageId;
    updateMetadataForSeries: typeof _updateMetadataForSeries;
    _broadcastEvent: (eventName: string, data: any) => void;
}
interface DicomMetadataStoreType extends BaseImplementationType {
    subscribe: (event: string, callback: (data: any) => void) => {
        unsubscribe: () => any;
    };
    unsubscribe: (event: string, callback: (data: any) => void) => void;
}
declare const DicomMetadataStore: DicomMetadataStoreType;
export { DicomMetadataStore };
export default DicomMetadataStore;
//# sourceMappingURL=DICOMMetadataStore.d.ts.map