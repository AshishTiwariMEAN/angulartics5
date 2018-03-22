import { Angulartics2 } from 'angulartics2';
export declare class Angulartics2Intercom {
    private angulartics2;
    constructor(angulartics2: Angulartics2);
    pageTrack(path: string): void;
    eventTrack(action: string, properties: any): void;
    setUserProperties(properties: any): void;
}
