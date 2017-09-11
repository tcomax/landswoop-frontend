import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlFilterPipe } from '../filters/safeurl-filter.pipe';


@NgModule({
    imports: [CommonModule],
    declarations: [SafeUrlFilterPipe],
    exports: [SafeUrlFilterPipe],
})
export class SafeUrlFilterModule {}
