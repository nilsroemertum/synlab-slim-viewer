export namespace errorTypes {
    const AUTHENTICATION: string;
    const COMMUNICATION: string;
    const ENCODINGANDDECODING: string;
    const VISUALIZATION: string;
}
export class CustomError extends Error {
    constructor(type: any, message: any);
    message: any;
    stack: string | undefined;
    type: any;
}
//# sourceMappingURL=CustomError.d.ts.map