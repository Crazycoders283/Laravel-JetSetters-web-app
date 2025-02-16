<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::get();

        return Inertia::render('Admin/User/Index', ['users' => $users]);
    }

    public function create()
    {
        // die('kkkkkkkk');
        // return Inertia::render('src/components/Booking/index');
        return Inertia::render('Admin/User/Create');
    }
}
