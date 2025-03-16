<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookingNowController;
use App\Http\Controllers\PackageBookingController;
use App\Http\Controllers\PackageItineraryBooknowController;
use Inertia\Inertia;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\FlightSController;
use App\Http\Controllers\FlightExploreMoreControoller;
use App\Http\Controllers\PaymentDetailsController;
use App\Http\Conntrollers\HomeController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('home');


Route::get('/', [PackagesController::class, 'home'])->name('home');
Route::get('/packages', [PackagesController::class, 'index'])->name('package_index');
Route::get('/booking', [BookingController::class, 'index'])->name('booking_index');
Route::get('/booking/booknow', [BookingNowController::class, 'index'])->name('booking_now');
Route::get('/packages/itinerary', [PackageBookingController::class, 'index'])->name('package_itinerary');
Route::get('/packages/itinerary/booking', [PackageItineraryBooknowController::class, 'index'])->name('package_itinerary_booking');
Route::get('/flights', [FlightSController::class, 'index'])->name('flights_index');
Route::get('/flights/booking', [PaymentDetailsController::class, 'index'])->name('flights_booking');
Route::get('/flights/booking/booknow', [PaymentDetailsController::class, 'booking_index'])->name('booking_now_index');
Route::get('/flights/explore',[FlightExploreMoreControoller::class,"index"])->name('flight_explore_more');
Route::get('/itinerary', [PackageBookingController::class, 'itinerary'])->name('itinerary');
Route::get('/itinerary/{id}', [PackageBookingController::class, 'itinerary_view'])->name('itinerary_view');
Route::get('admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->prefix('admin')->as('admin.')->group(function () {
    Route::resource('/user', UserController::class);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
