<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

use App\Stamp;
use App\Achievement;

class StampController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        if(Auth::user()->id == 1){
            return Stamp::all();
        }
        return abort(403);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        if(Auth::user()->id == 1){
            return Stamp::create([
                'name' => $request->input('name'),
                'hash' => Str::random(100),
            ]);
        }
        return abort(403);
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
        if(Auth::user()->id == 1){
            return Stamp::find($id);
        }
        return abort(403);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        if(Auth::user()->id == 1){
            return Stamp::find($id)->
            update([
                'name' => $request->input('name'),
            ]);
        }
        return abort(403);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        if(Auth::user()->id == 1){
            return Stamp::find($id)->delete();
        }
        return abort(403);
    }

    // スタンプゲット処理
    public function get($hash){
        $user = Auth::user();
        $stamp = Stamp::where('hash', '=', $hash)->first();

        // 受けとったhash存在する場合
        if($stamp !== null){
            $achievement = $user->achievement()->where('stamp_id', '=', $stamp->id)->first();

            if($achievement === null){
                $user->achievement()->attach($stamp->id);
                $user->increment('stamp');
                return $user->stamp;
            }
        }
        return abort(204);
    }
}
