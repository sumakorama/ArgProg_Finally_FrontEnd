import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { getExperimentalSetting } from '@firebase/util';
@Injectable({
  providedIn: 'root'
})
export class UpImgPService {
  url: string = "";

  constructor(private storage: Storage) { }
  public upImageP($event: any, name: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imgP/` + name)
    uploadBytes(imgRef, file)
      .then(response => { this.getImage() })
      .catch(error => console.log(error)
      )
  }

  getImage() {
    const imageRef = ref(this.storage, 'imgP')
    list(imageRef)
    .then(async response => {
       for(let item of response.items){
         this.url = await getDownloadURL(item);
         console.log(this.url);
        }
    })
    .catch(error => console.log(error))
  }
}


