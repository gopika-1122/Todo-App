<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;
use App\Http\Controllers\TaskContoller;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [authController::class, 'register']);
Route::post('/login', [authController::class, 'login']);
Route::post('/task', [TaskContoller::class, 'task']);
Route::get('/viewtask', [TaskContoller::class, 'viewTask']);
Route::post('/viewtaskbyid', [TaskContoller::class, 'viewtaskById']);
Route::post('/viewtaskbyidandupdate', [TaskContoller::class, 'viewtaskByIdUpdate']);
Route::post('/deletetask', [TaskContoller::class, 'deleteTask']);