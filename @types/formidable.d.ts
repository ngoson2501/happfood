declare module 'formidable' {
    export interface Fields {
        [key: string]: any;
    }

    export interface Files {
        [key: string]: any;
    }

    export class IncomingForm {
        parse(
            req: any,
            callback: (err: any, fields: Fields, files: Files) => void
        ): void;
    }
}
