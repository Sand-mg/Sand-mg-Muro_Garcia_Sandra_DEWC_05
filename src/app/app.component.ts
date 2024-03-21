import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Juego de Adivinación de Números Aleatorios - DWEC05';

  //Parte de la configuración
  miNombre: string = "";
  miApellido: string = "";
  rango: number = 0;
  intentos: number = 5;

  //variables
  mostrarAlerta: boolean = false;
  pulsado: boolean = false;
  numeroUsuario: number = 0;
  numerosIntroducidos:number[] = [];
  adivinado: string = "";
  aleatorio: number = 0;
  

  recogerDatos(): void {
    if (!this.miNombre || !this.miApellido || !this.rango || !this.intentos) {
      this.mostrarAlerta = true;
    }
    else {
      const configuracion = {
        nombre: this.miNombre,
        apellido: this.miApellido,
        rango: this.rango,
        intentos: this.intentos
      }
      this.pulsado = true;
      this.generarAleatorio();
    }
  }
  
  enviarNumero(): void {
    if(this.numeroUsuario != null && this.numeroUsuario <= this.rango && this.numeroUsuario >= 0 ) {
      this.numerosIntroducidos.push(this.numeroUsuario);
      if(this.numeroUsuario == this.aleatorio) {
        this.adivinado = "SI";
        this.intentos --;
      } else {
        this.intentos --;
        this.adivinado = "NO";
      }
    } else {
      alert("El número introducido no está en el rango de números generados.")
    }
  }

  generarAleatorio(): void {
    this.aleatorio = Math.floor(Math.random() * (this.rango + 1));
  }

}
