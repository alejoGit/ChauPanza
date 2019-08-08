<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoutinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',300);
            $table->string('video',2000)->default('')->nullable();
            $table->enum('status',['active','paused'])->default('paused');
            $table->enum('type',['free','premium'])->default('premium');
            $table->enum('difficulty',['alta','media','baja']);
            $table->enum('category',['gluteos','piernas','abdomen','brazos_pecho','tpc']);
            $table->smallInteger('position')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('routines');
    }
}
