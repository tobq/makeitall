<?php

use Illuminate\Database\Seeder;
use App\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        User::create([
            'name'  => 'Alice',
            'email' => 'alice@makeitall.com',
            'password' => Hash::make('password')
            ]
        );
    }
}
