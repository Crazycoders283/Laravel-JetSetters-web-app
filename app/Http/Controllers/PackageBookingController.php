<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PackageBookingController extends Controller
{
    public function index()
    {


        return Inertia::render('src/packages/Home/packagecard');
    }

    public function itinerary()
    {


        return Inertia::render('src/pages/Home/searchpage');
    }
    public function itinerary_view()
    {


        return Inertia::render('src/pages/Home/Tours');
    }
}
