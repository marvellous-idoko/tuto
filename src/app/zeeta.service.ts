import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ZeetaService {

  // server = 'http://localhost:3000/apiTuto/';
  // server = 'https://voyage-chaise-91976.herokuapp.com/apiTuto/'
  server = "https://api-reportkad.onrender.com/apiTuto/"
  headers = new HttpHeaders()
  
  constructor(private Http: HttpClient, @Inject(DOCUMENT) private d: Document,) {
    this.headers.append('Content-Type', 'applicatiion/json');
  }
  popCrtVwd :{[key:string]:any} = {}
  bksForUCrtVwd :{[key:string]:any} = {}
  trndCrtVwd :{[key:string]:any} = {}
  currInterfaceBoook :any = {price: 20}
  crrtBook:any
  ancerText:string = 'hello'
  user = JSON.parse(localStorage.getItem('tutoUser')!)
  eng : {[key:string]:any} = {}

  // let p = JSON.parse(localStorage.getItem('tutoUser'))
  kolkd(){
    this.user = JSON.parse(localStorage.getItem('tutoUser')!)
  }
  jko(h:boolean){
    
    if(h){
        this.d.body.style.backgroundColor = 'black'
        this.d.body.style.color = 'white'
    }else{
      console.log(this.user)
        this.d.body.style.backgroundColor = 'white'
        this.d.body.style.color = 'black'
    }
  }
  srch(nk:string){
    return this.Http.get(`${this.server}search?item=${nk}`, { headers: this.headers })
  }
  trxnHis(){
    return this.Http.get(`${this.server}trxHis?user=${this.user['account_no']}`, { headers: this.headers })
  }
  getBook(id:string){    
    return this.Http.get(this.server + 'getBook?bookId='+id+"&userId="+"9997979757", { headers: this.headers }) 
    // return this.Http.get(this.server + 'getBook?bookId='+id+"&userId="+this.user['account_no'], { headers: this.headers }) 
  }
  addCoin(s:string,ref:string,amt:string){
    return this.Http.get(`${this.server}postCoin?amt=${s}&user=${this.user['account_no']}&ref=${ref}&amtCsh=${amt}`, { headers: this.headers }) 
  }
  chkBkAvail(){
    return this.Http.get(`${this.server}chkBkCrnRead?bookId=${this.crrtBook['bookId']}&user=${this.user['account_no']}`, { headers: this.headers }) 
  }
  rmvCoin(chptr=2){
    return this.Http.get(`${this.server}rmvCoin?bookId=${this.crrtBook['bookId']}&user=${this.user['account_no']}&chptr=${chptr}`, { headers: this.headers }) 
  }
  incrNoReads(){
    return this.Http.get(`${this.server}increNoReads?bookId=${this.crrtBook['bookId']}&user=${this.user['account_no']}`, { headers: this.headers }) 
  }
  listbooks(cat:string,further=false,genre?:string){
    return this.Http.get(`${this.server}listBooks?genres=${genre}&cat=${cat}&account_no=${this.user['account_no']}&further=${further}`, { headers: this.headers }) 
  }
  listbookys(cat:string,further=false,genre?:string){
    return this.Http.get(`${this.server}listBookys?genres=${genre}&cat=${cat}&account_no=${this.user['account_no']}&further=${further}`, { headers: this.headers }) 
  }

  cmt(id:string,data:string){
    return this.Http.get(this.server +'comment?bookId='+`${id}&value=${data}&user=${this.user['account_no']}`, { headers: this.headers })
  }
  getCmts(id:string){
    return this.Http.get(this.server +'getComments?bookId='+`${id}`, { headers: this.headers })
  }
  checkForNewComments(id:string){
    return this.Http.get(this.server +'getCommentCount?bookId='+`${id}`, { headers: this.headers })
  }
  getBkJSON(){
    return this.Http.get(this.crrtBook['linkJSON'], { headers: this.headers })
  }
  getBkPDF(){
    return this.Http.get(this.crrtBook['linkPdf'], { headers: this.headers })
  }
  getRes(id:string,type:string,cat:string){
    return this.Http.get(this.server + `getResource?type=${type}&id=${id}&cat=${cat}`, { headers: this.headers })
  }
    // auth
  register(data:{}){
    return this.Http.post(this.server + 'auth/register',data, { headers: this.headers }) 
  }
  login(data:{}){
    console.log(data)
    return this.Http.post(this.server + 'auth/login',data, { headers: this.headers }) 
  }

}
