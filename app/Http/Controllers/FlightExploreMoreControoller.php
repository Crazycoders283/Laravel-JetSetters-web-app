<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class FlightExploreMoreControoller extends Controller
{
    public function index()
    {
        // $users = User::get();

        return Inertia::render('Flights/Explore_more');
    }
}
