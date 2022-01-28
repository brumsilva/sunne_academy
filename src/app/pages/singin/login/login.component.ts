import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Adm } from '../../../../services/login.service';
import { Usuario } from '../../../../services/common-login.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import { CommonLoginService } from '../../../../services/common-login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  passwordFormControl = new FormControl(null, [Validators.required, Validators.nullValidator])

  matcher = new MyErrorStateMatcher();

  hide = true;

  constructor(private loginservice: LoginService,commonloginservice: CommonLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginservice.Login().subscribe({
      next: (resultado) =>{
        console.log(resultado) //aqui vem a array
          if (resultado[0].email == this.user.email && resultado[0].password == this.user.password) {
            localStorage.setItem('existe', 'true') // método do local storage 1º nome da variável = existe; 2º condição = true

            console.log(this.user)
            return this.router.navigate(['/home']) // o cão de guarda ativa aqui
          } else {

            localStorage.setItem('existe', 'false')
            console.log(this.user)
            return this.router.navigate(['/home'])
            //Redireciono o usuário para a rota mesmo retornando falso, para garantir a segurança do Angular Guards
          }

         },
      error: (error) => {console.error(error)},
      complete: () => {console.info('ok')}
    })}

}
