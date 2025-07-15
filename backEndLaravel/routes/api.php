<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/resultado', function (Request $request) {
    $dados = $request->all();

    $caminho = "rotina.json";

    Storage::disk('local') -> put($caminho, json_encode($dados, JSON_PRETTY_PRINT));

    return response()->json([
        'mensagem' => 'Dados recebidos com sucesso!',
        'dados' => $dados
    ]);
});

Route::get('/rotina', function() {
    $path = storage_path('app/rotina.json');
    if(!file_exists($path)){
        return response()->json(['error' => 'Arquivo não encontrado'], 404);
    }
    $dados = json_decode(file_get_contents($path), true);
    return response()->json($dados);
});