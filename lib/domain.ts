export const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
export const defaults={school:'Escola de Música Santa Cecília',base:600,commission:50,start:today(),open:'08:00',close:'18:00',days:[1,2,3,4,5,6],configured:false};
export function occurrences(month:string,config:any){
 const result:any[]=[];const end=new Date(Number(month.slice(0,4)),Number(month.slice(5)),0).getDate();
 for(let d=1;d<=end;d++) {const date=month+'-'+String(d).padStart(2,'0');if(date<config.start)continue;const day=new Date(date+'T12:00:00Z').getUTCDay();
 if(config.days.includes(day)){result.push({id:'open:'+date,title:'Abrir a escola',date,time:config.open,type:'Abertura'});result.push({id:'close:'+date,title:'Encerramento e conferência do caixa',date,time:config.close,type:'Fechamento'});}
 result.push({id:'post:'+date,title:'Divulgação diária da escola',date,time:'',type:'Divulgação'});
 const diff=Math.floor((Date.parse(date)-Date.parse(config.start))/86400000);
 if(diff%7===0)result.push({id:'strategy:'+date,title:'Planejar a estratégia de divulgação da semana',date,time:'',type:'Planejamento'});
 if(diff>0&&diff%14===0)for(const type of ['Evolução dos alunos','Movimento do caixa','Situação da instituição'])result.push({id:'report:'+type+':'+date,title:'Relatório · '+type,date,time:'',type:'Relatório'});
 }
 for(const day of [15,end]){const date=month+'-'+String(day).padStart(2,'0');if(date>=config.start)result.push({id:'reel:'+date,title:'Enviar reel para aprovação de Samuel',date,time:'',type:'Reel'});}
 return result.sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
}
export const money=(v:number)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v||0);
