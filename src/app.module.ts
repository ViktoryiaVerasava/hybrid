import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddItemComponent } from './modules/angular/components/add-item/add-item.component';
import { CityComponent } from './modules/angular/components/city/city.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddItemComponent,
        CityComponent
    ],
    entryComponents: [
        AddItemComponent,
        CityComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
    }
}
