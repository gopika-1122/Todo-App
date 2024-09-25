<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class authController extends Controller
{
    public function register(Request $request)
    {
        $data = DB::table('users')->insertGetId([
            'email' => $request->email,
            'password' => $request->password,
            'status' => $request->status,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);
        DB::table('registeration_details')->insert([
            'name' => $request->name,
            'address' => $request->address,
            'contact' => $request->contact,
            'userid' => $data,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);
        echo json_encode("success");
    }


    public function login(Request $request)
    {
        $data = DB::table('users')->where([
            'email' => $request->email,
            'password' => $request->password
        ])->first();
        // if ($data) {
        //     return $data;
        // } else {
        //     return response()->json(
        //         [
        //             'message' => 'Invalid Credentials'
        //         ],
        //     );

        // }

        echo json_encode($data);
    }


}
