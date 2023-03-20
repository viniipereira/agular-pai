
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-curso',
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
    // url base
    url = "http://localhost/api/php/";

    //construtor
    constructor(private http: HttpClient) {





    }

    //incalizador
    ngOnInit() {
    }
    //cadastro
    cadstro(): void {
        alert("cadastro");
    }
    //seleção
    selecao(): void {
        alert("Seleção");
    }
    //Alterar
    alterar(): void {
        alert("Alterar");
    }
    //Remover
    remover(): void {
        alert("Remover");
    }

}
