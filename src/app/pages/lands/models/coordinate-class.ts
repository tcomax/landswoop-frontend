import { CoordinateInterface } from './coordinate-interface';

export class CoordinateClass implements CoordinateInterface {
    id: number;
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
