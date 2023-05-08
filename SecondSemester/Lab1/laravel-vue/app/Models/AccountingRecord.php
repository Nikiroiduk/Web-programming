<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class AccountingRecord
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'data',
    ];


}

class AccountingController extends controller{
    public function setData(array $data){
        for($i = 0; $i < count($data); $i++){
            echo "<script>console.log(" + $data[$i] + ");</script>";
        } 
    }
}