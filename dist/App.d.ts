import React from 'react';
import AppConfig, { ErrorMessageSettings } from './AppConfig';
import { User } from './auth';
import DicomWebManager from './DicomWebManager';
interface AppProps {
    name: string;
    homepage: string;
    version: string;
    config: AppConfig;
}
interface AppState {
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
declare class App extends React.Component<AppProps, AppState> {
    private readonly auth?;
    private readonly handleDICOMwebError;
    constructor(props: AppProps);
    addGcpSecondaryAnnotationServer(config: AppProps['config']): void;
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
export default App;
//# sourceMappingURL=App.d.ts.map