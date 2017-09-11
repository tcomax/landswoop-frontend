
import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { OrderClass } from '../models/order-class';
import { CommissionClass } from '../models/commission-class';
import { LandClass } from '../models/land-class';
import { ContactClass } from '../models/contact-class';
import { AuthorityClass } from '../models/authority-class';
import { DocumentClass } from '../models/document-class';
import { CoordinateClass } from '../models/coordinate-class';
import { UserClass } from '../models/user-class';
import { PortfolioClass } from '../models/portfolio-class';


@Injectable()
export class MockDataService {


contacts = [
    new ContactClass(
        0,
        'Tony',
        'Oz',
        'toz@yahoo.com',
        '08033559642',
    ),  
    new ContactClass(
        1,
        'Mike',
        'Adele',
        'toz@yahoo.com',
        '08033559642',
    ),  
    new ContactClass(
        2,
        'Chinedu',
        'Okechukwu',
        'toz@yahoo.com',
        '08033559642',
    ),  
    new ContactClass(
        3,
        'Hassan',
        'Mugunu',
        'toz@yahoo.com',
        '08033559642',
    ), 
    new ContactClass(
        4,
        'Chichi',
        'Ozomine',
        'toz@yahoo.com',
        '08033559642',
    ),  
    new ContactClass(
        5,
        'Mohammed',
        'Gambo',
        'toz@yahoo.com',
        '08033559642',
    ),  
    new ContactClass(
        6,
        'Simon',
        'Okoye',
        'toz@yahoo.com',
        '08033559642',
    ),  
    new ContactClass(
        7,
        'Nike',
        'Masharl',
        'toz@yahoo.com',
        '08033559642',
    ), 
 
];

users = [
    new UserClass(
        0, 
        this.contacts[0], 
        'kunle.badmus@growland.com', 
        'password', 
        0,
    ),
    new UserClass(
        0, 
        this.contacts[0], 
        'ozed.oseghale@growland.com', 
        'password', 
        0,
    ),
    new UserClass(
        0, 
        this.contacts[0], 
        'admin.manager@growland.com', 
        'password', 
        1,
    ),
];


coordinates = [
    new CoordinateClass(
        0, 
        3.12354, 
        6.77892, 
    ), 
    new CoordinateClass(
        1, 
        3.12354, 
        6.77992, 
    ), 
    new CoordinateClass(
        2, 
        3.12622, 
        6.77892, 
    ), 
    new CoordinateClass(
        3, 
        3.12623, 
        6.77991, 
    ), 
    new CoordinateClass(
        4, 
        3.12354, 
        6.77895, 
    ), 
    new CoordinateClass(
        5, 
        3.12364, 
        6.77899, 
    ), 
];

authorities = [
    new AuthorityClass(
        0,
        1,
        'LASG Lands Bureau',
        this.contacts, 
    ),
    new AuthorityClass(
        1,
        2,
        'FG Lands Bureau',
        this.contacts, 
    ),
    new AuthorityClass(
        2,
        0,
        'Smart Surveyors Ltd',
        this.contacts, 
    ),
    new AuthorityClass(
        3,
        1,
        'LASG Lands Bureau',
        this.contacts, 
    ),
];

titleDocuments = [
    new DocumentClass(
        0,
        'Certificat of Occupancy', // [CofO/SurveyPLan/Layout/Deed of Assignment]
        'LASG-AKL-1234',  // official document number
        this.authorities[0],
        '../../../assets/img/cofo-icon.png',
        this.contacts[2],
    ),
    new DocumentClass(
        1,
        'Governors Conscent', // [CofO/SurveyPLan/Layout/Deed of Assignment]
        'LASG-EPE-2901',  // official document number
        this.authorities[0],
        '../../../assets/img/cofo-icon.png',
        this.contacts[3],
    ),
    new DocumentClass(
        2,
        'Certificat of Occupancy', // [CofO/SurveyPLan/Layout/Deed of Assignment]
        'LASG-AKL-1234',  // official document number
        this.authorities[1],
        '../../../assets/img/cofo-icon.png',
        this.contacts[4],
    ),
    new DocumentClass(
        3,
        'Registered Survey Plan', // [CofO/SurveyPLan/Layout/Deed of Assignment]
        'SVY-BGJ-100-9PO',  // official document number
        this.authorities[0],
        '../../../assets/img/surveyplan-icon.png',
        this.contacts[5],
    ),
    new DocumentClass(
        4,
        'Approved Layout Plan', // [CofO/SurveyPLan/Layout/Deed of Assignment]
        'LAY-AKL-H834',  // official document number
        this.authorities[2],
        '../../../assets/img/town-plan.png',
        this.contacts[3],
    ),
    new DocumentClass(
        5,
        'Registered Deed of Assignment', // [CofO/SurveyPLan/Layout/Deed of Assignment]
        'HC-AKL-7879',  // official document number
        this.authorities[2],
        '../../../assets/img/cofo-icon.png',
        this.contacts[4],
    ),

];


lands = [
    new LandClass(  
        0,     
        this.titleDocuments,
        this.contacts,
        this.coordinates,
        '154569 SQ.MTRS of prime land less than 3KM from dangote refinery. Well drained land no sand filling required',
        'Iba Village, Ibeju Lekki, Lagos, Nigeria',
        154569,
        1000,
    ), 
    new LandClass(  
        1,     
        this.titleDocuments,
        this.contacts,
        this.coordinates,
        '605678 SQ.MTRS of land. Situated within 1KM the new Lagos Airport site at Elerungbe, Ibeju Lekki.',
        'Elerungbe Village, Ibeju-Lekki, Lagos, Nigeria',
        605678,
        2300,
    ), 
    new LandClass(  
        2,     
        this.titleDocuments,
        this.contacts,
        this.coordinates,
        '300564 SQ. MTRS in Imudun town Badagry',
        'Imu road, Badagry, Lagos, Nigeria',
        300564,
        3800,
    ), 
    new LandClass(  
        3,     
        this.titleDocuments,
        this.contacts,
        this.coordinates,
        '98238 SQ. MTRS in Alimosh LGA',
        'Alimosho, Lagos, Nigeria',
        98238,
        5000,
    ), 
];


orders = [
    new OrderClass(
        0,
        "Bought",
        this.users[0],
        this.lands[2],
        100,
        45090,
        'successful',
        '08-08-2017 08:10:00'
    ),
    new OrderClass(
        1,
        "Bought",
        this.users[0],
        this.lands[2],
        100,
        109000,
        'failed',
        '08-09-2017 11:50:00'
    ),
    new OrderClass(
        2,
        "Sold",
        this.users[1],
        this.lands[2],
        50,
        67900,
        'successful',
        '08-10-2017 09:23:00'  
    ),
    new OrderClass(
        3,
        "Bought",
        this.users[2],
        this.lands[3],
        930,
        0,
        'pending',
        '08-11-2017 08:10:00'
        
    ),
    new OrderClass(
        4,
        "Sold",
        this.users[1],
        this.lands[1],
        50,
        5000,
        'successful',
        '08-12-2017 05:20:00'
        
    ),
];

commissions = [
    new CommissionClass(
        0,
        'marketing',
        this.orders[0],
        this.users[1],
        50000,
        10,
        'paid',
        '08-13-2017 16:10:00',
        
    ),
    new CommissionClass(
        1,
        'investment',
        this.orders[0],
        this.users[1],
        50000,
        0.001,
        'pending',
        '08-14-2017 11:10:00',
        
    ),
    new CommissionClass(
        2,
        'marketing',
        this.orders[0],
        this.users[1],
        500,
        10,
        'successful',
        '08-15-2017 16:30:00',
        
    ),
    new CommissionClass(
        3,
        'marketing',
        this.orders[0],
        this.users[1],
        534,
        0.001,
        'pending',
        '08-16-2017 16:10:00',
        
    ),
    new CommissionClass(
        4,
        'investment',
        this.orders[0],
        this.users[1],
        1500,
        1,
        'successful',
        '08-16-2017 12:50:00',
        
    ),
    new CommissionClass(
        5,
        'investment',
        this.orders[0],
        this.users[1],
        19400,
        0.001,
        'failed',
        '08-17-2017 09:10:00',
        
    ),
    new CommissionClass(
        6,
        'marketing',
        this.orders[0],
        this.users[1],
        5690,
        0.01,
        'failed',
        '08-18-2017 16:10:00',
        
    ),
    new CommissionClass(
        7,
        'marketing',
        this.orders[0],
        this.users[1],
        74,
        0.1,
        'denied',
        '08-19-2017 20:10:00',
        
    ),
];

portfolio = [
    new PortfolioClass(  
        0,     
        this.users[0],
        this.lands[0],
        123,
        'active',
    ), 
    new PortfolioClass(  
        1,     
        this.users[0],
        this.lands[1],
        13,
        'active',
    ), 
    new PortfolioClass(  
        2,     
        this.users[0],
        this.lands[2],
        2369,
        'active',
    ), 
    new PortfolioClass(  
        3,     
        this.users[0],
        this.lands[3],
        17,
        'active',
    ), 
];

}
