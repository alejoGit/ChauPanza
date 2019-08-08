<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);

        for($i = 0; $i < 9; $i++) {
        	 DB::table('routines')->insert([
                'name'  => 'Gluteos - Alta '.($i+1),
                'video' => 'https://player.vimeo.com/video/327592658',
                'category' => 'gluteos',
                'status' =>'active',
                'difficulty' =>'alta',
                'created_at'  => '2017-10-11 00:00:0'.$i,
                'updated_at'  => '2017-10-11 00:00:00'.$i,
            ]);

        }

        for($i = 0; $i < 9; $i++) {
        	 DB::table('routines')->insert([
                'name'  => 'Piernas - Alta '.($i+1),
                'video' => 'https://player.vimeo.com/video/327592658',
                'category' => 'piernas',
                'status' =>'active',
                'difficulty' =>'alta',
                'created_at'  => '2017-10-12 00:00:00'.$i,
                'updated_at'  => '2017-10-12 00:00:00'.$i,
            ]);

        }

        for($i = 0; $i < 9; $i++) {
        	 DB::table('routines')->insert([
                'name'  => 'Abdomen - Alta '.($i+1),
                'video' => 'https://player.vimeo.com/video/327592658',
                'category' => 'abdomen',
                'status' =>'active',
                'difficulty' =>'alta',
                'created_at'  => '2017-10-13 00:00:00'.$i,
                'updated_at'  => '2017-10-13 00:00:00'.$i,
            ]);

        }

        for($i = 0; $i < 9; $i++) {
        	 DB::table('routines')->insert([
                'name'  => 'Brazos y Pecho - Alta '.($i+1),
                'video' => 'https://player.vimeo.com/video/327592658',
                'category' => 'brazos_pecho',
                'status' =>'active',
                'difficulty' =>'alta',
                'created_at'  => '2017-10-14 00:00:00'.$i,
                'updated_at'  => '2017-10-14 00:00:00'.$i,
            ]);

        }

        for($i = 0; $i < 9; $i++) {
        	 DB::table('routines')->insert([
                'name'  => 'Todas las partes del cuerpo - Alta '.($i+1),
                'video' => 'https://player.vimeo.com/video/327592658',
                'category' => 'tpc',
                'status' =>'active',
                'difficulty' =>'alta',
                'created_at'  => '2017-10-15 00:00:00'.$i,
                'updated_at'  => '2017-10-15 00:00:00'.$i,
            ]);

        }


    }
}
