<?php

namespace App\Http\Controllers\Register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;
use Illuminate\Support\Facades\DB;

class RegisterController extends Controller
{
    public function index(){
        return view('index');
    }

    public function retrieve()
    {
        $register = Register::get();
        return json_encode($register);
    }

    public function store(Request $request){
        try{
            DB::beginTransaction();
            $data = $request->all();
            Register::insert($data);
            DB::commit();

            return ("Data Submitted Successfully");

        }catch ( \Exception $exception ){
            DB::rollBack();
          
                return $exception->getMessage();
        }
    }
}
