<?php

use App\Http\Controllers\SubscriberController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::post('subscribe', [SubscriberController::class, 'store']);
Route::get('subscribers', [SubscriberController::class, 'index']);
Route::post('send-emails', [SubscriberController::class, 'sendEmails']);