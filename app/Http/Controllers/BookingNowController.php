<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use Illuminate\Http\Request;

class BookingNowController extends Controller
{
    public function index()
    {

        return Inertia::render('src/pages/Home/Tours');
    }
}
