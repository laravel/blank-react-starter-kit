export type * from './auth';

import type { Auth } from './auth';

export interface SharedData {
    name: string;
    auth: Auth;
    [key: string]: unknown;
}
