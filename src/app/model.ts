

export interface CertificateModel{
    name: string,
    date: string
  }
  
  
  export interface CrewListModel {
          id: number,
          firstName: string,
          lastName: string,
          nationality: string,
          title: string,
          certificates: CertificateModel[]
      }
  
  export class Model {
      
      crewList : CrewListModel[]
  
      constructor(){
          this.crewList= [
              {
                  id: 1,
                  firstName: "Jashua",
                  lastName: "King",
                  nationality: "Canada",
                  title: "Captain",
                  certificates: [
                    {
                      name: "Continuous Discharge Certificate",
                      date: "May 2014"
                    },
                    {
                      name: "Indian Database of Seafarers",
                      date: "Aug 2015"
                    },
                  ]
                },
                {
                  id: 2,
                  firstName: "Hasan",
                  lastName: "Kaplan",
                  nationality: "Turkey",
                  title: "2nd Captain",
                  certificates: [
                    {
                      name: "Standards of Training, Certification and Watchkeeping",
                      date: "Dec 2016"
                    },
                    {
                      name: "Continuous Discharge Certificate",
                      date: "Nov 2017"
                    },
                  ]
                },
                {
                  id: 3,
                  firstName: "Enner",
                  lastName: "Liverpool",
                  nationality: "England",
                  title: "3rd Captain",
                  certificates: [
                    {
                      name: "Indian Database of Seafarers",
                      date: "Apr 2018"
                    },
                    {
                      name: "Course Completion Certificate",
                      date: "Oct 2019"
                    },
                  ]
                },

                {
                    id: 4,
                    firstName: "Kevin",
                    lastName: "Costner",
                    nationality: "USA",
                    title: "4th Captain",
                    certificates: [
                      {
                        name: "Xth/XIIth mark sheet",
                        date: "Apr 2020"
                      },
                      {
                        name: "Continuous Discharge Certificate",
                        date: "Oct 2021"
                      }
                    ]
                  }
          ]
      }
  }