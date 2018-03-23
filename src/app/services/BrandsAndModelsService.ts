import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BrandsAndModelsService{
    url = 'https://car-leasing-service.herokuapp.com';

    constructor (private http: HttpClient){

    }

    getBrands(){
        return this.http.get(this.url + "/cars/brands").toPromise();
    }

    getModels(model: string){
        return this.http.get(this.url + "/cars/brand/" + model).toPromise();
    }
}