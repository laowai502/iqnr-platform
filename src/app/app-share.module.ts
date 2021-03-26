import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    NgbPopoverModule,
    NgbDropdownModule,
    NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [
        CommonModule,
        NgbPopoverModule,
        NgbDropdownModule,
        NgbAccordionModule
    ],
    exports: [
        NgbPopoverModule,
        NgbDropdownModule,
        NgbAccordionModule
    ],
    providers: []
})
export class AppShareModule { }
