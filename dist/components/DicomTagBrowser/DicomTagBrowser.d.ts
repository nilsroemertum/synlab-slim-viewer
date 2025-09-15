/// <reference types="react" />
import DicomWebManager from '../../DicomWebManager';
import './DicomTagBrowser.css';
interface DicomTagBrowserProps {
    clients: {
        [key: string]: DicomWebManager;
    };
    studyInstanceUID: string;
}
declare const DicomTagBrowser: ({ clients, studyInstanceUID }: DicomTagBrowserProps) => JSX.Element;
export default DicomTagBrowser;
//# sourceMappingURL=DicomTagBrowser.d.ts.map