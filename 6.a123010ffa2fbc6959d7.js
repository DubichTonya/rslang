(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(r,o,i){"use strict";i.r(o),i.d(o,"AuthModule",function(){return L});var t=i("ofXK"),n=i("tyNb"),e=i("3Pt+");const s=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*(){}[\];:<>,.?~_+\-=|]).{8,}$/;var a=i("fXoL"),l=i("N/25"),c=i("Y45k"),m=i("kmnG"),b=i("qFsG"),g=i("s3XV"),u=i("NFeN"),p=i("bTqV"),d=i("1P0b");function f(r,o){1&r&&(a.Sb(0,"mat-error",21),a.Ec(1," \u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e "),a.Rb())}function _(r,o){1&r&&(a.Sb(0,"mat-error",21),a.Ec(1," \u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 "),a.Rb())}function h(r,o){1&r&&(a.Sb(0,"mat-error",22),a.Ec(1," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email "),a.Rb())}function C(r,o){1&r&&(a.Sb(0,"mat-error",22),a.Ec(1," Email "),a.Sb(2,"strong"),a.Ec(3,"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"),a.Rb(),a.Rb())}function v(r,o){1&r&&(a.Sb(0,"mat-error",23),a.Ec(1," \u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d "),a.Rb())}function w(r,o){1&r&&(a.Sb(0,"mat-error",23),a.Ec(1," \u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043e\u0434\u043d\u0443 \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0443\u044e, \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u0447\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443, \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b "),a.Rb())}function E(r,o){1&r&&(a.Sb(0,"mat-error",24),a.Ec(1," \u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442 "),a.Rb())}function y(r,o){if(1&r&&(a.Sb(0,"div",25),a.Ec(1),a.Rb()),2&r){const r=a.dc();a.Cb(1),a.Fc(r.serverError)}}function S(r,o){1&r&&a.Ob(0,"app-progress")}let F=(()=>{class r{constructor(o,i,t,n){this.fb=o,this.authService=i,this.router=t,this.parser=n,this.visibility={passwordIsVisible:!1,confirmPasswordIsVisible:!1},this.serverError=null,this.loading=!1,this.usernameFormControl=o.control("",[e.n.required,e.n.minLength(3)]),this.emailFormControl=o.control("",[e.n.required,e.n.email]),this.passwordFormControl=o.control("",[e.n.required,e.n.pattern(s)]),this.confirmPasswordFormControl=o.control("",[e.n.required]),this.imageFormControl=o.control(null),this.signupForm=o.group({username:this.usernameFormControl,email:this.emailFormControl,password:this.passwordFormControl,confirm:this.confirmPasswordFormControl,image:this.imageFormControl},{validators:r.passwordMatch}),this.signupForm.valueChanges.subscribe(()=>{this.serverError&&(this.serverError=null)})}static passwordMatch(r){var o,i;return(null===(o=r.get("password"))||void 0===o?void 0:o.value)===(null===(i=r.get("confirm"))||void 0===i?void 0:i.value)?null:{matchingError:!0}}onPasswordInput(){this.signupForm.hasError("matchingError")?this.confirmPasswordFormControl.setErrors([{matchingError:!0}]):this.confirmPasswordFormControl.setErrors(null)}changeVisibility(r){this.visibility[r]=!this.visibility[r]}register(r){r.preventDefault(),this.loading=!0;const{email:o,password:i,username:t,image:n}=this.signupForm.value;this.signupForm.valid&&this.authService.register({email:o,password:i,username:t,image:n}).subscribe(r=>{r&&this.router.navigate(["/auth/login"],{state:{email:o}})},({error:r})=>{this.serverError="string"==typeof r?r:this.parser.parseError(null==r?void 0:r.error),this.loading=!1},()=>{this.loading=!1})}onLoadImage(r){var o;this.imagePreview=r,this.signupForm.patchValue({image:r}),null===(o=this.signupForm.get("image"))||void 0===o||o.updateValueAndValidity()}}return r.\u0275fac=function(o){return new(o||r)(a.Nb(e.c),a.Nb(l.a),a.Nb(n.c),a.Nb(c.a))},r.\u0275cmp=a.Hb({type:r,selectors:[["app-signup"]],decls:46,vars:20,consts:[[1,"signup"],[1,"color-text-togglable"],["novalidate","",1,"signup__form",3,"formGroup","submit"],[1,"signup__form-field-container"],["appearance","outline",1,"signup__form-field"],["type","text","matInput","","placeholder","\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",1,"signup__form-username",3,"formControl"],["class","signup__username-error",4,"ngIf"],["type","email","matInput","","placeholder","Email",1,"signup__form-email",3,"formControl"],["class","signup__email-error",4,"ngIf"],[3,"image","loadFileEvent"],["matInput","","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c",1,"signup__form-password",3,"type","formControl","input"],["matSuffix","",1,"signup__visibility-icon","color-text-togglable",3,"click"],["class","signup__password-error",4,"ngIf"],["matInput","","placeholder","\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",1,"signup__form-password-confirm",3,"type","formControl","input"],["class","signup__password-confirm-error",4,"ngIf"],["type","submit","mat-stroked-button","","color","primary",1,"signup__submit-btn",3,"disabled"],[1,"signup__go-login"],[1,"signup__go-login-text","color-text-togglable"],["routerLink","/auth/login",1,"signup__go-login-link"],["class","mat-error signup__server-error",4,"ngIf"],[4,"ngIf"],[1,"signup__username-error"],[1,"signup__email-error"],[1,"signup__password-error"],[1,"signup__password-confirm-error"],[1,"mat-error","signup__server-error"]],template:function(r,o){1&r&&(a.Sb(0,"div",0),a.Sb(1,"h1",1),a.Ec(2,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),a.Rb(),a.Sb(3,"form",2),a.Zb("submit",function(r){return o.register(r)}),a.Sb(4,"div",3),a.Sb(5,"mat-form-field",4),a.Sb(6,"mat-label"),a.Ec(7,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),a.Rb(),a.Ob(8,"input",5),a.Cc(9,f,2,0,"mat-error",6),a.Cc(10,_,2,0,"mat-error",6),a.Rb(),a.Rb(),a.Sb(11,"div",3),a.Sb(12,"mat-form-field",4),a.Sb(13,"mat-label"),a.Ec(14,"Email"),a.Rb(),a.Ob(15,"input",7),a.Cc(16,h,2,0,"mat-error",8),a.Cc(17,C,4,0,"mat-error",8),a.Rb(),a.Rb(),a.Sb(18,"div",3),a.Sb(19,"app-file-input",9),a.Zb("loadFileEvent",function(r){return o.onLoadImage(r)}),a.Rb(),a.Rb(),a.Sb(20,"div",3),a.Sb(21,"mat-form-field",4),a.Sb(22,"mat-label"),a.Ec(23,"\u041f\u0430\u0440\u043e\u043b\u044c"),a.Rb(),a.Sb(24,"input",10),a.Zb("input",function(){return o.onPasswordInput()}),a.Rb(),a.Sb(25,"mat-icon",11),a.Zb("click",function(){return o.changeVisibility("passwordIsVisible")}),a.Ec(26),a.Rb(),a.Cc(27,v,2,0,"mat-error",12),a.Cc(28,w,2,0,"mat-error",12),a.Rb(),a.Rb(),a.Sb(29,"div",3),a.Sb(30,"mat-form-field",4),a.Sb(31,"mat-label"),a.Ec(32,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),a.Rb(),a.Sb(33,"input",13),a.Zb("input",function(){return o.onPasswordInput()}),a.Rb(),a.Sb(34,"mat-icon",11),a.Zb("click",function(){return o.changeVisibility("confirmPasswordIsVisible")}),a.Ec(35),a.Rb(),a.Cc(36,E,2,0,"mat-error",14),a.Rb(),a.Rb(),a.Sb(37,"button",15),a.Ec(38," \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 "),a.Rb(),a.Sb(39,"div",16),a.Sb(40,"span",17),a.Ec(41,"\u0415\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"),a.Rb(),a.Sb(42,"a",18),a.Ec(43,"\u0412\u043e\u0439\u0442\u0438"),a.Rb(),a.Rb(),a.Cc(44,y,2,1,"div",19),a.Rb(),a.Cc(45,S,1,0,"app-progress",20),a.Rb()),2&r&&(a.Cb(3),a.jc("formGroup",o.signupForm),a.Cb(5),a.jc("formControl",o.usernameFormControl),a.Cb(1),a.jc("ngIf",o.usernameFormControl.hasError("required")),a.Cb(1),a.jc("ngIf",o.usernameFormControl.hasError("minlength")),a.Cb(5),a.jc("formControl",o.emailFormControl),a.Cb(1),a.jc("ngIf",o.emailFormControl.hasError("email")&&!o.emailFormControl.hasError("required")),a.Cb(1),a.jc("ngIf",o.emailFormControl.hasError("required")),a.Cb(2),a.jc("image",o.imagePreview),a.Cb(5),a.jc("type",o.visibility.passwordIsVisible?"text":"password")("formControl",o.passwordFormControl),a.Cb(2),a.Gc(" ",o.visibility.passwordIsVisible?"visibility":"visibility_off"," "),a.Cb(1),a.jc("ngIf",o.passwordFormControl.hasError("required")),a.Cb(1),a.jc("ngIf",o.passwordFormControl.hasError("pattern")),a.Cb(5),a.jc("type",o.visibility.confirmPasswordIsVisible?"text":"password")("formControl",o.confirmPasswordFormControl),a.Cb(2),a.Gc(" ",o.visibility.confirmPasswordIsVisible?"visibility":"visibility_off"," "),a.Cb(1),a.jc("ngIf",o.confirmPasswordFormControl.dirty&&o.signupForm.hasError("matchingError")),a.Cb(1),a.jc("disabled",o.signupForm.invalid),a.Cb(7),a.jc("ngIf",o.serverError),a.Cb(1),a.jc("ngIf",o.loading))},directives:[e.o,e.k,e.e,m.c,m.f,b.a,e.b,e.j,e.d,t.m,g.a,u.a,m.g,p.b,n.f,m.b,d.a],styles:["[_nghost-%COMP%]{width:100%}input[_ngcontent-%COMP%]{color:var(--color-text-togglable)}.signup[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem}.signup__form[_ngcontent-%COMP%]{width:18rem}.signup__form-field-container[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.2rem}.signup__form-field[_ngcontent-%COMP%]{width:100%}.signup__visibility-icon[_ngcontent-%COMP%]{cursor:pointer;opacity:.5}.signup__server-error[_ngcontent-%COMP%]{margin:1.5rem auto;display:flex;align-items:center;justify-content:center}.signup__submit-btn[_ngcontent-%COMP%]{width:100%;height:3rem}.signup__go-login[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}.signup__go-login-text[_ngcontent-%COMP%]{opacity:.5}.signup__go-login-link[_ngcontent-%COMP%]{display:inline-block;margin-left:.5rem;text-decoration:none}"]}),r})();function R(r,o){1&r&&(a.Sb(0,"mat-error",16),a.Ec(1," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email "),a.Rb())}function I(r,o){1&r&&(a.Sb(0,"mat-error",16),a.Ec(1," Email "),a.Sb(2,"strong"),a.Ec(3,"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"),a.Rb(),a.Rb())}function P(r,o){1&r&&(a.Sb(0,"mat-error",17),a.Ec(1," \u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d "),a.Rb())}function j(r,o){1&r&&(a.Sb(0,"mat-error",17),a.Ec(1," \u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043e\u0434\u043d\u0443 \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0443\u044e, \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u0447\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443, \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b "),a.Rb())}function O(r,o){if(1&r&&(a.Sb(0,"div",18),a.Ec(1),a.Rb()),2&r){const r=a.dc();a.Cb(1),a.Fc(r.serverError)}}function x(r,o){1&r&&a.Ob(0,"app-progress")}let M=(()=>{class r{constructor(r,o,i,t){this.fb=r,this.authService=o,this.router=i,this.parser=t,this.serverError=null,this.passwordIsVisible=!1,this.loading=!1;const{email:n}=window.history.state;this.emailFormControl=r.control(null!=n?n:"",[e.n.required,e.n.email]),this.passwordFormControl=r.control("",[e.n.required,e.n.pattern(s)]),this.loginForm=r.group({email:this.emailFormControl,password:this.passwordFormControl})}login(r){r.preventDefault(),this.loading=!0;const{email:o,password:i}=this.loginForm.value;this.loginForm.valid&&this.authService.login(o,i).subscribe(r=>{r&&this.router.navigate(["/"])},({error:r})=>{this.serverError="string"==typeof r?r:this.parser.parseError(null==r?void 0:r.error),this.loading=!1},()=>{this.loading=!1})}onPasswordInput(){this.passwordFormControl.hasError("pattern")?this.loginForm.setErrors([{pattern:!0}]):this.loginForm.setErrors(null)}changeVisibility(){this.passwordIsVisible=!this.passwordIsVisible}}return r.\u0275fac=function(o){return new(o||r)(a.Nb(e.c),a.Nb(l.a),a.Nb(n.c),a.Nb(c.a))},r.\u0275cmp=a.Hb({type:r,selectors:[["app-login"]],decls:29,vars:12,consts:[[1,"login"],[1,"color-text-togglable"],["novalidate","",1,"login__form",3,"formGroup","submit"],[1,"login__form-field-container"],["appearance","outline",1,"login__form-field"],["type","email","matInput","","placeholder","Email",1,"login__form-field-email",3,"formControl"],["class","login__email-error",4,"ngIf"],["matInput","","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c",1,"login__form-field-password",3,"type","formControl","input"],["matSuffix","",1,"login__visibility-icon","color-text-togglable",3,"click"],["class","login__password-error",4,"ngIf"],["type","submit","mat-stroked-button","","color","primary",1,"login__submit-btn",3,"disabled"],[1,"login__go-signup"],[1,"login__go-signup-text","color-text-togglable"],["routerLink","/auth/signup",1,"login__go-signup-link"],["class","mat-error login__server-error",4,"ngIf"],[4,"ngIf"],[1,"login__email-error"],[1,"login__password-error"],[1,"mat-error","login__server-error"]],template:function(r,o){1&r&&(a.Sb(0,"div",0),a.Sb(1,"h1",1),a.Ec(2,"\u041b\u043e\u0433\u0438\u043d"),a.Rb(),a.Sb(3,"form",2),a.Zb("submit",function(r){return o.login(r)}),a.Sb(4,"div",3),a.Sb(5,"mat-form-field",4),a.Sb(6,"mat-label"),a.Ec(7,"Email"),a.Rb(),a.Ob(8,"input",5),a.Cc(9,R,2,0,"mat-error",6),a.Cc(10,I,4,0,"mat-error",6),a.Rb(),a.Rb(),a.Sb(11,"div",3),a.Sb(12,"mat-form-field",4),a.Sb(13,"mat-label"),a.Ec(14,"\u041f\u0430\u0440\u043e\u043b\u044c"),a.Rb(),a.Sb(15,"input",7),a.Zb("input",function(){return o.onPasswordInput()}),a.Rb(),a.Sb(16,"mat-icon",8),a.Zb("click",function(){return o.changeVisibility()}),a.Ec(17),a.Rb(),a.Cc(18,P,2,0,"mat-error",9),a.Cc(19,j,2,0,"mat-error",9),a.Rb(),a.Rb(),a.Sb(20,"button",10),a.Ec(21," \u0412\u043e\u0439\u0442\u0438 "),a.Rb(),a.Sb(22,"div",11),a.Sb(23,"span",12),a.Ec(24,"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"),a.Rb(),a.Sb(25,"a",13),a.Ec(26,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),a.Rb(),a.Rb(),a.Cc(27,O,2,1,"div",14),a.Rb(),a.Cc(28,x,1,0,"app-progress",15),a.Rb()),2&r&&(a.Cb(3),a.jc("formGroup",o.loginForm),a.Cb(5),a.jc("formControl",o.emailFormControl),a.Cb(1),a.jc("ngIf",o.emailFormControl.hasError("email")&&!o.emailFormControl.hasError("required")),a.Cb(1),a.jc("ngIf",o.emailFormControl.hasError("required")),a.Cb(5),a.jc("type",o.passwordIsVisible?"text":"password")("formControl",o.passwordFormControl),a.Cb(2),a.Fc(o.passwordIsVisible?"visibility":"visibility_off"),a.Cb(1),a.jc("ngIf",o.passwordFormControl.hasError("required")),a.Cb(1),a.jc("ngIf",o.passwordFormControl.hasError("pattern")),a.Cb(1),a.jc("disabled",o.loginForm.invalid),a.Cb(7),a.jc("ngIf",o.serverError),a.Cb(1),a.jc("ngIf",o.loading))},directives:[e.o,e.k,e.e,m.c,m.f,b.a,e.b,e.j,e.d,t.m,u.a,m.g,p.b,n.f,m.b,d.a],styles:["[_nghost-%COMP%]{width:100%}input[_ngcontent-%COMP%]{color:var(--color-text-togglable)}.login[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem}.login__form[_ngcontent-%COMP%]{width:18rem}.login__form-field-container[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.2rem}.login__form-field[_ngcontent-%COMP%]{width:100%}.login__visibility-icon[_ngcontent-%COMP%]{cursor:pointer;opacity:.5}.login__server-error[_ngcontent-%COMP%]{margin:1.5rem auto;display:flex;align-items:center;justify-content:center}.login__submit-btn[_ngcontent-%COMP%]{width:100%;height:3rem}.login__go-signup[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}.login__go-signup-text[_ngcontent-%COMP%]{opacity:.5}.login__go-signup-link[_ngcontent-%COMP%]{display:inline-block;margin-left:.5rem;text-decoration:none}"]}),r})();var V=i("hctd"),k=i("PCNd"),q=i("eqRq"),N=i("l7P3");let Z=(()=>{class r{constructor(r){this.store=r}canActivate(r,o){return this.store.select(q.b)}}return r.\u0275fac=function(o){return new(o||r)(a.Wb(N.h))},r.\u0275prov=a.Jb({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const G=[{path:"signup",component:F,canActivate:[Z]},{path:"login",component:M,canActivate:[Z]}];let L=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=a.Lb({type:r}),r.\u0275inj=a.Kb({imports:[[t.c,e.m,V.a,n.g.forChild(G),k.a]]}),r})()}}]);