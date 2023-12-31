/*
 * name: budiono
 * date: aug-31, 09:07, thu-2023; new; 98;
 */ 

'use strict';

var Register={
  url:'register',
  title:'Registration'
}

Register.show=(tiket)=>{
  tiket.menu.name=Register.title;
  tiket.modul=Register.url;
  
  tiket.bisa.tambah=0;
  tiket.bisa.ubah=0;
  
  tiket.letak.atas=0;
  tiket.letak.tengah=1;
  
  tiket.ukuran.lebar=40;
  tiket.ukuran.tinggi=25;
  
  tiket.toolbar.ada=0;
  
  const baru=exist(tiket);
  if(baru==-1){
    const newReg=new BingkaiUtama(tiket);
    const indek=newReg.show();
    Register.formCreate(indek);
  }else{
    show(baru);
  }  
}

Register.formCreate=(indek)=>{
  Register.formEntry(indek);
}

Register.formEntry=(indek)=>{
  const html='<div class="div-center">'
  +'<form autocomplete="off" '
  +'style="padding:0.5rem;" >'
  +'<div id="msg_'+indek+'" style="margin-bottom:1rem;"></div>'
  +'<ul>'
  +'<li>'
    +'&#128100; <label>User Name</label>'
    +'<input type="text" id="user_name_'+indek+'">'
    +'</li>'
  
  +'<li>'
    +'&#128101; <label>Full Name</label>'
    +'<input type="text" id="user_fullname_'+indek+'">'
    +'</li>'
  
  +'<li>'
    +'&#128273; <label>Password</label>'
    +'<input type="password" id="user_password_'+indek+'">'
  +'</li>'
  
  +'<li>'
    +'&#128271; <label>Confirm Passwd</label>'
    +'<input type="password" id="confirm_password_'+indek+'">'
    +'</li>'
    
  +'<li>'
    +'&#128291; <label>Passcode</label>'
    +'<iframe src="'+bingkai[indek].server.url+'passcode/create.png" '
    +' id="passcode_image_'+indek+'" '
    +' style="padding-top:0.2rem;width:5rem;height:1.5rem;overflow:hidden;" '
    +' scrolling="no" disabled>'
    +' </iframe>'
    +'</li>'
  
  +'<li>&nbsp;</li>'
  +'<li>'
    +'&#128290; <label>Retype Passcd</label>'
  +'<input type="text" id="retype_passcode_'+indek+'">'
  +'<li>&nbsp;</li>'
  +'<li><button type="button" '
  +' id="button_register_'+indek+'" '
  +' onclick="Register.createData(\''+indek+'\');">'
  +'&#128209; Register</button></li>'

  +'</ul>'
  
  +'</form>'
  +'</div>';
  content.html(indek,html);
  document.getElementById('user_name_'+indek).focus();
  statusbar.ready(indek);
}

Register.createData=(indek)=>{
  console.log('Register.createData()');
}
// eof: 98;
