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
}
