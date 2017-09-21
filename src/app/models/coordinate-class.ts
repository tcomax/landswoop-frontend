import { CoordinateInterface } from './coordinate-interface';
import { LandClass } from './land-class';


export class CoordinateClass implements CoordinateInterface {
    id: number;
    land: LandClass;
    longtitude: number;
    latitude: number;

    constructor(_id: number, lng: number, lat: number) {
        this.id = _id;
        this.longtitude = lng;
        this.latitude = lat;
    }

    getPoint(bearing: number, distance: number): CoordinateClass {
        let lng = bearing;
        let lat = distance;

        return new CoordinateClass(this.id++, lng, lat);  // calculate next coordinate
    }
}
