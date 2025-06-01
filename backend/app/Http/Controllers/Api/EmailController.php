<?php
namespace App\Http\Controllers\Api;
use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class EmailController extends Controller
{
    public function store(Request $request)
    {
        // Validate email input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:emails,email',
        ]);

        if ($validator->fails()) {
            return response()->json([
            'message' => 'Validation failed.',
            'errors' => $validator->errors()
        ], 422);
        }

    try {
        // Save email to the database
        $subscriber = Email::create([
            'email' => $request->email,
        ]);

        return response()->json([
            'message' => 'You have successfully subscribed to our product updates.',
            'data' => $subscriber,
        ], 201);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'An error occurred while saving your email.',
            'error' => $e->getMessage()
        ], 500);
    }
}
}
