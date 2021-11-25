<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// 認証前
Route::post('/signup', 'UserController@store');     // user作成
Route::post('/signin', 'UserController@signin');    // user認証

// 認証後
Route::middleware(['auth:sanctum'])->group(function () {
    
    // user関連
    Route::group(['prefix' => 'user'], function () {
        Route::get('/', 'UserController@index');        // 取得
        Route::put('/', 'UserController@update');       // 編集
        Route::delete('/', 'UserController@destroy');   // 削除
    });

});