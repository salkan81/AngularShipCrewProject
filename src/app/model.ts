

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
                  firstName: "Katheryn",
                  lastName: "Winnick",
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
                    {
                      name: "National Certificate of Compatence and endrosement",
                      date: "Oct 2015"
                    },
                    {
                      name: "Flag State Endorsement of Recognition",
                      date: "Feb 2016"
                    },
                    {
                      name: "Medical First Aid",
                      date: "May 2016"
                    },
                  ]
                },
                {
                  id: 2,
                  firstName: "Ahmet",
                  lastName: "Çalık",
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
                    {
                      name: "Survival Craft and Rescue Boats",
                      date: "Dec 2017"
                    },
                    {
                      name: "Advanced Fire Fighting",
                      date: "Jan 2018"
                    },
                    {
                      name: "Medical Fitness",
                      date: "Nov 2018"
                    },
                  ]
                },
                {
                  id: 3,
                  firstName: "David",
                  lastName: "Beckham",
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
                    {
                      name: "Basic Safety Familiarisation",
                      date: "Dec 2019"
                    },
                    {
                      name: "Advanced Fire Fighting",
                      date: "Jan 2020"
                    },
                    {
                      name: "Medical Fitness",
                      date: "June 2020 "
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
                      },
                      {
                        name: "Ship Spesific Familiarisation",
                        date: "Apr 2021"
                      },
                      {
                        name: "Security Familiarisation",
                        date: "Oct 2021"
                      },
                      {
                        name: "Medical Fitness",
                        date: "Nov 2021 "
                      },
                    ]
                  }
          ]
      }
  }