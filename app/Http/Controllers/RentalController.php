<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RentalController extends Controller
{
    public function index()
    {
        // dd('llllllllllllllll');
        // return Inertia::render('packages/packages');
        return Inertia::render('src/rentals/LandingPage');
    }
    public function show()
    {
        // dd('kkkkkkkkkkkkkkk');
        return Inertia::render('src/rentals/hotel-details/HotelDetails');
    }
    public function booking()
    {
        // dd('kkkkkkkkkkkkkkk');
        return Inertia::render('src/rentals/hotel-details/HotelDetails');
    }
}
