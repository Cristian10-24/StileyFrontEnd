import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { RouterModule } from '@angular/router';


//* /Angular material



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   /*  MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule, */
  ],
  exports: [
  FooterComponent,
    HeaderComponent,
    UbicacionComponent
    //Angular material
    /* MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule */ 
  ]
})
export class SharedModule { }
