import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr:ToastrService) { }
  showAlert(){
    this.toastr.error('Please Login with Google First', 'Major Info',{
      progressBar:true,
      progressAnimation:'increasing'
    })
  }
}
