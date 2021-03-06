import {Response} from '@angular/http'
import { Observable } from "rxjs";

export class ErrorHandler{ 
    static handlerError(error: Response | any) { 
        let errorMenssage: string; 
        
        if (error instanceof Response){ 
            errorMenssage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            errorMenssage = error.ToString();
        }
        console.log(errorMenssage);

        return Observable.throw(errorMenssage); 
    }
}