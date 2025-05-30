<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscriber;
use Illuminate\Http\Response;
use Illuminate\Mail\Mailer;
use App\Services\MailService;
use Mail;


class SubscriberController extends Controller
{
    public function store(Request $request){
        
        try{

        
        $request->validate([
            'email' => 'required|email|unique:subscriber_emails,email'
        ]);

        $subscriber = Subscriber::create([
            'email' => $request->input('email')
        ]);
        
        return response()->json([
            'message' => 'You have successfully subscribed to our newsletter.',
            'subscriber' => $subscriber
        ],200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while subscribing.',
                'error' => $e->getMessage()
            ], 500);
        }
        
    }

    public function index(){
        try{
            $emails = Subscriber::all();
            return response()->json([
                $emails
            ]);
        }catch (\Exception $e){
            return response()->json([
                'message' => 'error retrieving emails',
                'error' =>$e->getMessage()
            ]);
        }
        
        
    }

    public function sendEmails(Request $request){
        $subject = $request->input('subject');
        $body = $request->input('body');
        $mailService = MailService::class;
        $mailService = new MailService();
        
        try{
            $emails = Subscriber::all();
            foreach( $emails as $mail){
                $mailService->sendEmail($mail->email, $subject, $body);
            }
            return response()->json([
                'message' => 'Emails sent successfully.',
                'emails' => $emails->pluck('email')
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while sending emails.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
