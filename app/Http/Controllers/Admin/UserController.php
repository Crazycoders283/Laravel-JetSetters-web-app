<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\UserCreateRequest;

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
    public function store(UserCreateRequest $request)
    {
        User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => Hash::make($request['password']), // Secure password
        ]);
        return response()->json(['message' => 'User created successfully!']);
        // return Redirect::route('admin.user.index')->with('success', 'User created successfully!');
    }
}
