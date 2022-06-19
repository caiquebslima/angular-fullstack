import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'frontend'

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.httpClient
            .post('/api/users/login', {
                email: 'caique@gmail.com',
                password: '1234abcd',
            })
            .subscribe(res => console.log(res))
    }
}
