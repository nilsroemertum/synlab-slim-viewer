import React from 'react';
import { NavigateFunction, Params, Location } from 'react-router-dom';
export interface RouteComponentProps {
    location: Location;
    navigate: NavigateFunction;
    params: Params<string>;
}
export declare function withRouter<T>(Component: React.ComponentType<T>): Function;
//# sourceMappingURL=router.d.ts.map