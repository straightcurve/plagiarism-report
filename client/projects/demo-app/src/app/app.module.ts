import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CopyleaksReportModule } from 'projects/plagiarism-report/src/public-api';
import { ReportComponent, EmptyComponent } from './report.component';
import { RoutingModule } from './routing.module';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { ScanResultComponent } from './components/scan-result/scan-result.component';

@NgModule({
	declarations: [
		AppComponent,
		ReportComponent,
		EmptyComponent,
		ScanResultComponent],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FlexLayoutModule,
		RoutingModule,
		CopyleaksReportModule.forRoot({ contentMode: 'text', share: true, download: false }),

		MatIconModule,
		MatButtonModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [ScanResultComponent]
})
export class AppModule { }
