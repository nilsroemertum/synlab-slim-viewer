import React from 'react';
import AppConfig, { ErrorMessageSettings } from './AppConfig';
import { User } from './auth';
import DicomWebManager from './DicomWebManager';
interface SlimViewerProps {
    config: AppConfig;
    onStudySelect?: (studyInstanceUID: string) => void;
    onError?: (error: Error) => void;
    className?: string;
    style?: React.CSSProperties;
    height?: string | number;
    name?: string;
    version?: string;
    homepage?: string;
}
interface SlimViewerState {
    clients: {
        [sopClassUID: string]: DicomWebManager;
    };
    defaultClients: {
        [sopClassUID: string]: DicomWebManager;
    };
    user?: User;
    isLoading: boolean;
    redirectTo?: string;
    wasAuthSuccessful: boolean;
    error?: ErrorMessageSettings;
}
declare class SlimViewer extends React.Component<SlimViewerProps, SlimViewerState> {
    private readonly auth?;
    private readonly handleDICOMwebError;
    constructor(props: SlimViewerProps);
    addGcpSecondaryAnnotationServer(config: SlimViewerProps['config']): void;
    handleServerSelection({ url }: {
        url: string;
    }): void;
    /**
     * Handle successful authentication event.
     *
     * Authorizes the DICOMweb client to access the DICOMweb server and directs
     * the user back to the App.
     *
     * @param user - Information about the user
     * @param authorization - Value of the "Authorization" HTTP header field
     */
    handleSignIn: ({ user, authorization }: {
        user: User;
        authorization: string;
    }) => void;
    signIn(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
}
export default SlimViewer;
//# sourceMappingURL=SlimViewer.d.ts.map