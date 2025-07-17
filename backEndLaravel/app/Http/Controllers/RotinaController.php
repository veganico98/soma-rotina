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

    public function sum(){
        $path = storage_path('app/rotina.json');

        if(!file_exists($path)){
            return response()->json(['erro'=>'Arquivo não encontrado'], 404);
        }

        $json = file_get_contents($path);
        $dados = json_decode($json, true);

        $soma = 0;

        foreach($dados as $dia => $minutos){
            $soma += is_numeric($minutos) ? $minutos : 0;
        }

        $totalMinutos = $soma;
        $horas = floor($soma/60);
        $minutosRestantes = $soma % 60;

        return response()->json([
            'total_minutos' => $totalMinutos,
            'horas' => $horas,
            'minutos_restantes' => $minutosRestantes
        ]);
    }
}