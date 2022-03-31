import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators, FormArray} from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' }},{provide:MAT_CHECKBOX_DEFAULT_OPTIONS,useValue:{color:'primary'}}]
 

})
export class CreateProfileComponent implements OnInit {

  currentYear = new Date().getFullYear();
  date = new FormControl(new Date(this.currentYear-20,0,1));


  profileForm:FormGroup;
  constructor(private fb:FormBuilder) {
    console.log('Called constructor method'+new Date());

    this.profileForm=this.fb.group(
    {
     
      maritalStatus:'',
      famMember: this.fb.array([]),
      languages: this.fb.array([]),
      skills:this.fb.array([]),
      companyDetails:this.fb.array([]),
      references:this.fb.array([]),

    });
  }

  
  famMember(){
    return this.profileForm.get("famMember") as FormArray
  }

  languages()
  {
    return this.profileForm.get("languages") as FormArray
  }
  skills()
  {
    return this.profileForm.get("skills") as FormArray
  }
  companyDetails()
  {
    
    return this.profileForm.get("companyDetails") as FormArray
  }
  references()
  { 
    return this.profileForm.get("references") as FormArray
  }
  newMember()
  {
    return this.fb.group(
      {
        memberName:'',
        memberRelationship:'',
        memberAge:'',
        memberOccupation:'',
      })
  }

  newLanguage()
  {
    return this.fb.group({
      languageName:'',
      canSpeak:'',
      canRead:'',
      canWrite:'',
    })
  }

  newSkill()
  {
    return this.fb.group({
      skillName:'',
      skillExp:'',
      skillRating:'',
    })
  }

  newCompany()
  {
    
    return this.fb.group({
      companyName:'',
      durationFrom:'',
      durationTo:'',
      role:'',
      reason:'',
      yearsOfExp:'',
    })
  }

  newReference()
  {
    return this.fb.group({
      fullName:'',
      profRel:'',
      contactNo:'',
      bus_occ:'',
      
    })
  }
//Method for adding family member row
  addMember()
  {
    this.famMember().push(this.newMember());
  }
  //Method for deleting family member row
  deleteMember(i:number)
  {
    this.famMember().removeAt(i);
  }

  //Method for saving family member
  saveMember(i:number)
  {
   console.log(this.profileForm.value.famMember[i]);
      
  }

  //methods for adding language row
  addLanguage()
  {
    this.languages().push(this.newLanguage());
  }


  //method for deleting language row
  deleteLanguage(i:number)
  {
    this.languages().removeAt(i);
  }

    //method for saving language 

    saveLanguage(i:number)
    {
      console.log(this.profileForm.value.languages[i]);
    }

    //method to add skill row
    addSkill()
    {
      this.skills().push(this.newSkill());
    }
    //delete skill
    deleteSkill(i:number)
    {
      this.skills().removeAt(i);
    }
    //saving skill
    saveSkill(i:number)
    {
      console.log(this.profileForm.value.skills[i]);
    }
    //adding company fields
    addCompany()
    {
      
      this.companyDetails().push(this.newCompany());
    }
    //delete company details fields
    deleteCompany(i:number)
    {
      this.companyDetails().removeAt(i);
    }

    //adding reference
    addReference()
    {
      this.references().push(this.newReference());
    }
    //save reference
    saveReference(i:number)
    {
      console.log(this.profileForm.value.references[i]);
    }
    deleteReference(i:number)
    {
      this.references().removeAt(i);
    }

    //navigate to next tab

    navNextTab(tabName:string)
    {
      const tabHeaders=document.getElementsByClassName('tab-heading');
      for (let i=0; i<tabHeaders.length;i++)
      {
        
        if(tabHeaders[i].textContent==tabName)
        {

          (<HTMLElement>tabHeaders[i+1]).click();             
          break;
        }
      }
    }
    navBackTab(tabName:string)
    {
      const tabHeaders=document.getElementsByClassName('tab-heading');
      for (let i=0; i<tabHeaders.length;i++)
      {
        
        if(tabHeaders[i].textContent==tabName)
        {
            
          (<HTMLElement>tabHeaders[i-1]).click();             
          break;
        }
      }
    }
    
      ngOnInit() {
         
  }

}
