<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index()
    {
        // die('kkkkkkkk');
        // return Inertia::render('src/components/Booking/index');
        return Inertia::render('src/pages/Home/searchpage');
    }
}
