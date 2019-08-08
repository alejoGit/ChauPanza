<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeedingExtrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feeding_extras', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',300)->default('')->nullable();
            $table->string('image',45)->default('')->nullable();
            $table->longText('body')->nullable();
            $table->smallInteger('position')->default(0);
            $table->string('type',100)->default('')->nullable();
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
        Schema::dropIfExists('feeding_extras');
    }
}
