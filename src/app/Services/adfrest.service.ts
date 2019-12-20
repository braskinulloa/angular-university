import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ADFRestService {
  params = [];
  // headers = new HttpHeaders();
  httpOptions = {
    // headers: new HttpHeaders(), 
    withCredentials: true
  };
  constructor(private http: HttpClient) { }

  getData(
          apiUrl: string,
          collection?:{ name:string, value?: any, child?: { name: string, value?: any } } ,
          PrimaryKey?:[ { name: string, value: any } ],
          limit?: number,
          offset?: number,
          where?:[{ column: string, value: any, operator?: string}],
          orderBy?:[{ column:string, order?: string}]
          ){   
    const name = obj => Object.keys(obj)[0];//convierte el nombre de la variable a string
    if (collection){
      apiUrl = apiUrl.concat(`/${collection.name}`);
      if(collection.value) apiUrl = apiUrl.concat(`/${collection.value}`);
      if(collection.child){
        apiUrl = apiUrl.concat(`/child/${collection.child.name}`);
        if(collection.child.value) apiUrl = apiUrl.concat(`/${collection.child.value}`);
      } 
    }
    apiUrl = apiUrl.concat('?');    

    if (PrimaryKey){
      apiUrl = apiUrl.concat(`finder=${name({PrimaryKey})};`); 
      for (var i = 0, len = PrimaryKey.length; i < len; i++) {
        apiUrl = apiUrl.concat(`${PrimaryKey[i].name}=${PrimaryKey[i].value}`); 
        if((i+1) != PrimaryKey.length){
          apiUrl = apiUrl.concat(','); 
        }else{
          apiUrl = apiUrl.concat('&'); 
        }
      }
    }
    if (limit) this.params.push(`${name({limit})}=${limit}`);
    if (offset) this.params.push(`${name({offset})}=${offset}`);
    if(where){
      for (var i = 0, len = where.length; i < len; i++) {
        apiUrl = apiUrl.concat(`q=${where[i].column}${where[i].operator?where[i].operator:'='}${where[i].value}&`);
      }
    }
    if(orderBy){
      for (var i = 0, len = orderBy.length; i < len; i++) {
        apiUrl = apiUrl.concat(`${name({orderBy})}=${orderBy[i].column}:${orderBy[i].order?orderBy[i].order:'asc'}`);
        if((i+1) != orderBy.length){
          apiUrl = apiUrl.concat(','); 
        }else{
          apiUrl = apiUrl.concat('&'); 
        }
      }
    }

    this.params.forEach(e => {
      apiUrl = apiUrl.concat(`${e}&`);
    });   
    console.log(apiUrl);
    
    return this.http.get(`${apiUrl}`, this.httpOptions);//usar url encode
  }

  postData(
    apiUrl: string,
    collection:{ name:string, value: any, child?: { name: string, value: any }},
    data: any
  ){      
    if (collection){
      apiUrl = apiUrl.concat(`/${collection.name}`);
      if(collection.value) apiUrl = apiUrl.concat(`/${collection.value}`);
      if(collection.child){
        apiUrl = apiUrl.concat(`/child/${collection.child.name}`);
        if(collection.child.value) apiUrl = apiUrl.concat(`/${collection.child.value}`);
      } 
    }
    return this.http.post(apiUrl, data);
  }
  patchData(
    apiUrl: string,
    collection:{ name:string, value: any, child?: { name: string, value: any }},
    data: any
  ){      
    if (collection){
      apiUrl = apiUrl.concat(`/${collection.name}`);
      if(collection.value) apiUrl = apiUrl.concat(`/${collection.value}`);
      if(collection.child){
        apiUrl = apiUrl.concat(`/child/${collection.child.name}`);
        if(collection.child.value) apiUrl = apiUrl.concat(`/${collection.child.value}`);
      } 
    }
    return this.http.patch(apiUrl, data);
  }
  deleteData(
    apiUrl: string,
    collection:{ name:string, value: any, child?: { name: string, value: any }}
  ){
    if (collection){
      apiUrl = apiUrl.concat(`/${collection.name}`);
      if(collection.value) apiUrl = apiUrl.concat(`/${collection.value}`);
      if(collection.child){
        apiUrl = apiUrl.concat(`/child/${collection.child.name}`);
        if(collection.child.value) apiUrl = apiUrl.concat(`/${collection.child.value}`);
      } 
    }
    return this.http.delete(apiUrl);
  }
}
