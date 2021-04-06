

 var photos = ['https://static.scsport.ba/media/2019/06/FK-Sarajevo.jpg', 'https://www.nfsbih.ba/images/2019-D/005_maj/18052019/IMG_4567.jpg','https://fksweb.fra1.digitaloceanspaces.com/1011/conversions/72-rodendan-fk-sarajevo-i-premijera-filma-keli-large.jpg','http://bordobijeli.weebly.com/uploads/2/5/0/0/25004762/9646706_orig.jpg','https://fksweb.fra1.digitaloceanspaces.com/790/conversions/uclani-se-u-fk-sarajevo-online-large.jpg']
 
 var index = 0;
 var img = document.getElementById('slika');
 img.src = photos[index];


 function nextImg(){
     console.log('Slijedeca slika');
     if(index >= photos.length){
         index = 0;
     }
     img.src = photos[index];
     index++
    
     
 }

 


 function prevImg(){
    img.src = photos[index];
    if(index <= 0){
        index = photos.length
    }
     index--
     console.log('Prethodna slika');
    
 }


 function addPhoto(){
     console.log('Dodaj sliku');
     var photo = document.getElementById('photo').value;
     photos.push(photo);
     prevImg();
     nextImg();
 }

 