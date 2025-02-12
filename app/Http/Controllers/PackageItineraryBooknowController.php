<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageItineraryBooknowController extends Controller
{
    public function index()
    {


        return Inertia::render('src/packages/Home/Tours');
    }
}
