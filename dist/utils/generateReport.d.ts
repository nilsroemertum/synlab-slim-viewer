import { roi, metadata } from 'dicom-microscopy-viewer';
import { User } from '../auth';
interface AppInfo {
    name: string;
    version: string;
    uid: string;
    organization?: string;
}
declare const generateReport: ({ rois, metadata, user, app, visibleRoiUIDs }: {
    rois: roi.ROI[];
    metadata: metadata.VLWholeSlideMicroscopyImage[];
    user: User | undefined;
    app: AppInfo;
    visibleRoiUIDs: Set<string>;
}) => {
    isReportModalVisible: boolean;
    generatedReport: metadata.Comprehensive3DSR;
};
export default generateReport;
//# sourceMappingURL=generateReport.d.ts.map