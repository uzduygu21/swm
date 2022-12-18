import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationComponent } from './notification/notification.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        NgbdModalComponent,
        NgbdModalContent,
        BasicelementsComponent,
        NavigationComponent,
        NotificationComponent,
        NucleoiconsComponent,
        TypographyComponent,

  ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }