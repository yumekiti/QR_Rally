<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\Http\Requests\UserRequest;
use App\Http\Requests\UserSigninRequest;

use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Auth::user();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        //
        // user作成
        return User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request)
    {
        //
        return Auth::user()->
        update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        //
        return Auth::user()->delete();
    }

    // 認証
    public function signin(UserSigninRequest $request){
        $email = $request->input('email');
        $password = $request->input('password');

        // 認証する
        if(Auth::attempt(['email' => $email, 'password' => $password])){
            // 認証が通ったら認証されたuserを返す
            return Auth::user();
        }

        // 認証できなかったら以下を返す
        return abort(401, 'メールアドレスまたはパスワードが違います。');
    }

    public function all()
    {
        //
        if(Auth::user()->id == 1){
            return User::all();
        }
        return abort(403);
    }

    public function guest()
    {
        $guests = User::where('name', 'like', '%guest%')->get()->last();

        $newGuest = ((int)mb_strstr($guests->name, '_', true) + 1) . "_guest";

        return User::create([
            'name' => $newGuest,
            'email' => $newGuest . "@guest.com",
            'password' => Hash::make(Str::random(30)),
        ]);
    }
}
