import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalService {
  resume = [
    { date1: "1998 - 2008", date2: "2008 - 2010", date3: "2010 - 2014" },
    {
      education1: "college korba",
      education2: "lycee korba",
      education3:
        "institut superieur d'informatique et de mathématique Monastir",
    },
    { date4: "2014 - 2015", date5: "2015 - 2018", date6: "2018 - Present" },
    { experience1: "battal", experience2: "battal", experience3: "battal" },
    { Number: "58065605" },
    {
      skills: {
        skill1: "bother ala",
        skill2: "kill wala",
        skill3: "make halim mad",
        skill4: "i'm smart",
      },
    },
  ];
  // connected user name
  message: any;
  // profile searched data
  otherProfile: any;
  // one post
  onePost: any;
  // profile company data
  companyInfo: any = {};
  // training center profile data
  tsInfo: any = {};
  // post data
  post: any;
  // reported post data
  reported: any;
  // data of user
  user: any;
  // protected routes
  redirected: boolean = false;

  constructor() {}
}
