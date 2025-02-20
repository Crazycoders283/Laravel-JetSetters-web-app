<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use Illuminate\Http\Request;

class FlightSController extends Controller
{
    public function index()
    {
        // $users = User::get();

        return Inertia::render('Flights/flights');
    }
}
