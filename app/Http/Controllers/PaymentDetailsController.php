<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class PaymentDetailsController extends Controller
{
    public function index()
    {


        return Inertia::render('Flights/Booking');
    }
    public function booking_index()
    {


        return Inertia::render('Flights/Booking_now');
    }
}
