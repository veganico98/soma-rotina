<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/resultado', function (Request $request) {
    $dados = $request->all();
    return response()->json([
        'mensagem' => 'Dados recebidos com sucesso!',
        'dados' => $dados
    ]);
});