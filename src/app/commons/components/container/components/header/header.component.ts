import { Component, OnInit } from '@angular/core';
import { ChannelHeaderService } from './../../../../services/local/channel-header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor(private _channelHeaderService: ChannelHeaderService) {
		this._channelHeaderService.channelHeader.subscribe((response) => {
			console.log('****channelHeader value:***', response);
		});
	}

	ngOnInit(): void {
		console.log('**HeaderComponent**');
	}
}
