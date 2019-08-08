<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',300);
            $table->string('photo',45)->default('');
            $table->enum('category',['consumo_reducido','proteinas_grasas','hidratos_carbono'])->default('consumo_reducido');
            // $table->enum('type',['breakfast','lunch','snak','dinner'])->default('breakfast');
            $table->enum('type',['free','premium'])->default('premium');
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
        Schema::dropIfExists('foods');
    }
}
