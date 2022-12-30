import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IResponseListSales } from '../../../commons/services/api/sale/sale-api-model.interface';
import { IResponseGenre } from './../../../commons/services/api/genre/genre-api-model.interface';

@Component({
	selector: 'app-maintenance-buy-page',
	templateUrl: './maintenance-buy-page.component.html',
	styleUrls: ['./maintenance-buy-page.component.scss']
})
export class MaintenanceBuyPageComponent implements AfterViewInit {
	@ViewChild('paginator') paginator?: MatPaginator;

	displayedColumns: string[] = [
		'customer',
		'event',
		'ticketsQuantity',
		'totalSale',
		'saleDate',
		'saleDate',
		'dateEvent'
	];

	listGenres: IResponseGenre[] = [];
	dataSource = new MatTableDataSource<IResponseListSales>();

	constructor(private _formBuilder: FormBuilder) {}

	formGroup = this._formBuilder.nonNullable.group({
		dateInit: new FormControl<Date | null>(null),
		dateEnd: new FormControl<Date | null>(null)
	});

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator!;
	}

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	clickClear(): void {
		this.formGroup.reset();
	}
}
