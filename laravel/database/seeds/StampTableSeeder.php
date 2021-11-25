<?php

use Illuminate\Database\Seeder;

use App\Stamp;
use Illuminate\Support\Facades\Hash;

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
                'name' => Hash::make($name),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ]);
        }
    }
}
