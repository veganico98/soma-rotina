<?php

use Illuminate\Support\Facades\Route;

Route::get('/teste-api', function () {
    return response()->json(['message' => 'API funcionando!']);
});