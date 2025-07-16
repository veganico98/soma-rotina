<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RotinaController;

Route::post('/resultado', [RotinaController::class, 'store']);

Route::get('/rotina', function() {
    $path = storage_path('app/rotina.json');
    if(!file_exists($path)){
        return response()->json(['error' => 'Arquivo não encontrado'], 404);
    }
    $dados = json_decode(file_get_contents($path), true);
    return response()->json($dados);
});

Route::get('/resultado/soma', [RotinaController::class, 'sum']);