<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RotinaController extends Controller{
    public function store(Request $request){
        $dados = $request->all();

        file_put_contents(storage_path('app/rotina.json'), json_encode($dados, JSON_PRETTY_PRINT));

        return response()->json([
            'mensagem' => 'Dados Salvos com sucesso no rotina.json',
            'dados' => $dados
        ]);
    }
}