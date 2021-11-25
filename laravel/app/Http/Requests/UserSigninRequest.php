<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserSigninRequest extends FormRequest
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
            'email' => 'required|email|exists:users',
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
            'email.required' => 'メールアドレスは必須です。',
            'email.email' => '有効なメールアドレスでなければなりません。',
            'email.exists' => '入力したメールアドレスが見つかりません。',
            'password.required' => 'パスワードは必須です。',
            'password.min' => 'パスワードを8文字以上でなければなりません。',
        ];
    }
}
