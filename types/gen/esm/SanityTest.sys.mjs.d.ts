declare module "resource://gre/modules/SanityTest.sys.mjs" {export function SanityTest(): void;
export class SanityTest {
    classID: any;
    QueryInterface: any;
    shouldRunTest(): boolean;
    observe(subject: any, topic: any, data: any): void;
}
}