<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskContoller extends Controller
{
    public function task(Request $request)
    {
        DB::table('task')->insert([
            'task' => $request->task,
            'description' => $request->description,
            'status' => 0,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);
        echo json_encode("success");
    }

    public function viewTask()
    {
        $task = DB::table("task")->get();
        echo json_encode($task);
    }


    public function viewtaskById(Request $request)
    {
        $task = DB::table("task")->where("id", $request->id)->get();
        echo json_encode($task);
    }
    public function viewtaskByIdUpdate(Request $request)
    {
        $task = DB::table("task")->where("id", $request->id)->update([
            "status" => $request->status,
            "description" => $request->description,
            "task" => $request->task,
            "updated_at" => \Carbon\Carbon::now(),
        ]);
        echo json_encode("success");
    }

    public function deleteTask(Request $request)
    {
        $task = DB::table("task")->where("id", $request->id)->delete();
        echo json_encode("success");
    }
}
