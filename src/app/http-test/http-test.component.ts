import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    tulos = 'Moro';
    apitulos = 'Moro taas';
    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';

    osoitetulos: any;
    osoiteapi = 'http://api.hel.fi/linkedevents/v1/event/?format=json';

    constructor(private http: HttpClient) {
    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe((data) => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        this.http.get(this.apiosoite + '/media').subscribe(data => {
            console.log(data[0].filename);
            this.apitulos = this.kuvaosoite + data[0].filename;
        });
    }

    getFromApi2() {
        interface Myinterface {
            data: any;
        }

        this.http.get<Myinterface>(this.osoiteapi).subscribe(resp => {
            console.log(resp.data);
            this.osoitetulos = resp.data;
        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
        this.getFromApi2();
    }

}
