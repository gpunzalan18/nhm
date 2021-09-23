import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ToolbarComponent, CardComponent, ButtonComponent],
  exports: [ToolbarComponent, CardComponent, ButtonComponent],
  providers: [],
})
export class ComponentModule {}
