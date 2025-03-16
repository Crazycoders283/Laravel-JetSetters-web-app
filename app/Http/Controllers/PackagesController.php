<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
// use Illuminate\Support\Facades\Route;
// use Illuminate\Foundation\Application;

class PackagesController extends Controller
{

    public function index()
    {
        // dd('llllllllllllllll');
        // return Inertia::render('packages/packages');
        return Inertia::render('src/packages/packages');
    }

    public function home()
    {
        $IternaryList = [
            [
                "id" => 1,
                "image" => "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
                "title" => "3 Night Bahamas",
                "rating" => "5.0",
                "description" => "Starts from $31.27/p.p",
                "buttonText" => "Book Now"
            ],
            [
                "id" => 2,
                "image" => "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
                "title" => "7 Night Caribbean",
                "rating" => "4.8",
                "description" => "Starts from $45.00/p.p",
                "buttonText" => "Book Now"
            ],
            [
                "id" => 3,
                "image" => "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
                "title" => "5 Night Mediterranean",
                "rating" => "4.7",
                "description" => "Starts from $50.00/p.p",
                "buttonText" => "Book Now"
            ],
            [
                "id" => 4,
                "image" => "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
                "title" => "10 Night Alaskan Explorer",
                "rating" => "4.9",
                "description" => "Starts from $60.00/p.p",
                "buttonText" => "Book Now"
            ],
            [
                "id" => 5,
                "image" => "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
                "title" => "14 Night Transatlantic",
                "rating" => "4.6",
                "description" => "Starts from $75.00/p.p",
                "buttonText" => "Book Now"
            ],
            [
                "id" => 6,
                "image" => "https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg",
                "title" => "4 Night Mexican Riviera",
                "rating" => "4.8",
                "description" => "Starts from $40.00/p.p",
                "buttonText" => "Book Now"
            ]
        ];

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'IternaryList' => $IternaryList,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    
}
