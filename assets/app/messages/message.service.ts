import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Message } from "./message.model";
@Injectable()
export class MessageService{
   private messages : Message[] = []

   constructor(private http: Http){

   }

    addMessage(message : Message){
       this.messages.push(message)
       this.http.post()
       
    } 

    getMessages(){
        return this.messages
    }
    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message),1)
    }
}