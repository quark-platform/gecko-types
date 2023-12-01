declare module "resource://gre/modules/SanityTest.sys.mjs" {export function SanityTest(): void;
export class SanityTest {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    shouldRunTest(): boolean;
    observe(subject: any, topic: any, data: any): void;
}
}