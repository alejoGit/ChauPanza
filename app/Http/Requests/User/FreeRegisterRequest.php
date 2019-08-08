<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class FreeRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
        'name'          => 'required',
        'last_name'     => 'required',
        'birthdate'     => 'required',
        'weight'        =>  'required',
        'email'         => 'required|email|unique:users',
        'password'      => 'required|min:6',

        ];
    }
}
