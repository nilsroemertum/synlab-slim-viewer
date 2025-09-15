/**
 * Logger utility that wraps console logging and can be configured for different environments
 */
export declare enum LogLevel {
    DEBUG = 0,
    LOG = 1,
    WARN = 2,
    ERROR = 3,
    NONE = 4
}
interface LoggerConfig {
    level: LogLevel;
    enableInProduction: boolean;
    enableInDevelopment: boolean;
}
export declare class Logger {
    config: LoggerConfig;
    constructor();
    /**
     * Parse log level string to LogLevel enum
     */
    parseLogLevel(level: string): LogLevel;
    /**
     * Configure the logger
     */
    configure(config: Partial<LoggerConfig>): void;
    /**
     * Check if logging is enabled for the current environment and level
     */
    private shouldLog;
    /**
     * Log debug messages
     */
    debug(...args: unknown[]): void;
    /**
     * Log info messages
     */
    log(...args: unknown[]): void;
    /**
     * Log warning messages
     */
    warn(...args: unknown[]): void;
    /**
     * Log error messages
     */
    error(...args: unknown[]): void;
}
export declare const logger: Logger;
export declare const debug: (...args: unknown[]) => void;
export declare const log: (...args: unknown[]) => void;
export declare const warn: (...args: unknown[]) => void;
export declare const error: (...args: unknown[]) => void;
export {};
//# sourceMappingURL=logger.d.ts.map