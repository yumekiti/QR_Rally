<?php

use Illuminate\Database\Seeder;

use App\Stamp;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class StampTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $names = ['hoge', 'piyo', 'huga'];

        foreach ($names as $name) {
            Stamp::create([
                'name' => $name,
                'hash' => Hash::make(Str::random(10)),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ]);
        }
    }
}
