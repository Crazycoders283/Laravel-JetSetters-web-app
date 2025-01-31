<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PackagesController extends Controller
{

    public function index()
    {
        // dd('llllllllllllllll');
        // return Inertia::render('packages/packages');
        return Inertia::render('src/packages/packages');
    }
}
