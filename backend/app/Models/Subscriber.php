<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $table = 'subscriber_emails';
    protected $fillable = ['email'];
    public $timestamps = true;
}
