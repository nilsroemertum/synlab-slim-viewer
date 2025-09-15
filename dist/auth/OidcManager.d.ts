import { OidcSettings } from '../AppConfig';
import { User, AuthManager, SignInCallback } from './';
export default class OidcManager implements AuthManager {
    private _oidc;
    constructor(baseUri: string, settings: OidcSettings);
    /**
     * Sign-in to authenticate the user and obtain authorization.
     */
    signIn: ({ onSignIn }: {
        onSignIn?: SignInCallback | undefined;
    }) => Promise<void>;
    /**
     * Sign-out to revoke authorization.
     */
    signOut: () => Promise<void>;
    /**
     * Get authorization. Requires prior sign-in.
     */
    getAuthorization: () => Promise<string | undefined>;
    /**
     * Get user information. Requires prior sign-in.
     */
    getUser: () => Promise<User>;
}
//# sourceMappingURL=OidcManager.d.ts.map