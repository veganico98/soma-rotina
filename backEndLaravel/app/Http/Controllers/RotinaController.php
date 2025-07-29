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

    public function exportMin()
    {
        $response = $this->sum();

        if ($response->status() !== 200){
            return $response;
        }

        $data = $response->getData(true);
        $novoTotal = $data['total_minutos'] ?? 0;

        $path = storage_path('app/semana.json');

        $conteudo = [
            "semana1" => [["totalMinutos" => ""]],
            "semana2" => [["totalMinutos" => ""]]
        ];

        if(file_exists($path)){
            $conteudo = json_decode(file_get_contents($path), true);
        }

        $conteudo['semana1'][0]['totalMinutos'] = $conteudo['semana2'][0]['totalMinutos'] ?? "";

        $conteudo['semana2'][0]['totalMinutos'] = $novoTotal;

        file_put_contents($path, json_encode($conteudo, JSON_PRETTY_PRINT));

        return response()->json([
            'mensagem' => 'Exportação feita com sucesso!',
            'conteudo' => $conteudo
        ]); 
    }
    public function getSemana(){
        $path = storage_path('app/semana.json');

        if (!file_exists($path)) {
            return response()->json(['erro' => 'Arquivo semana.json não encontrado'], 404);
        }

        $json = file_get_contents($path);
        $dados = json_decode($json, true);

        return response()->json($dados);
    }

}