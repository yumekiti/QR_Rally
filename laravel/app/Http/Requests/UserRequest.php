<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            //
            'name' => 'required|max:50',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ];
    }

    /**
     * 定義済みバリデーションルールのエラーメッセージ取得
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => '名前は必須です。',
            'name.max' => '名前は50字以下にしてください。',
            'email.required' => 'メールアドレスは必須です。',
            'email.email' => '有効なメールアドレスでなければなりません。',
            'email.unique' => '入力したメールアドレスは既に使われています。',
            'password.required' => 'パスワードは必須です。',
            'password.min' => 'パスワードを8文字以上でなければなりません。',
        ];
    }
}
