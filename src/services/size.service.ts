import { Injectable } from "@angular/core";

@Injectable()
export class SizeService {

    private euroToRusssianSizes: Map<string, string> = new Map([["xs", "42"], ["s", "42"], ["m", "44"], ["l", "46"], ["xl", "48"]]);

    constructor() { }

    public getTranslatedValue(value: string): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.euroToRusssianSizes.get(value));
                reject("Error!");
            }, 1000);
        });
    }

}