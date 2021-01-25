import {Bar} from 'react-chartjs-2'
import React, { Component } from 'react';
import axios from 'axios';


export default  class LineChart extends Component {
  constructor() {
    super()
    this.state = 
      {
        allInfo:'',
       GC1:'',
       atHome:'',
       other:'',
       Health:'',
       Services:'',
       Teacher:'',
      Barchartdata:'',

      atHome2:'',
      other2:'',
      Health2:'',
      Services2:'',
      Teacher2:'',
     Barchartdata2:'',

     atHome3:'',
      other3:'',
      Health3:'',
      Services3:'',
      Teacher3:'',
     Barchartdata3:'',

      }
    }
    componentDidMount() {

      axios.get(`http://20.82.112.97:5000/alldata`)
      .then(res => {
        const data = res.data;
        this.setState({allInfo:data})
        
         console.log(this.state.allInfo["0"].school)

        // Create a new array based on current state:
        
        let atHome=''
        let other=''
        let Health=''
        let Services=''
        let Teacher=''
        let Mjob=[]
        let GC1 =[]

         
        let atHome2=''
        let other2=''
        let Health2=''
        let Services2=''
        let Teacher2=''

        let atHome3=''
        let other3=''
        let Health3=''
        let Services3=''
        let Teacher3=''

        for (var i = 0; i < this.state.allInfo.length; i++) {
    
              if( this.state.allInfo[i].Mjob == "at_home"){     
                //if(this.state.allInfo[i].Mjob == "at_home"){
                 Mjob.push(this.state.allInfo[i].Mjob );
                 if(this.state.allInfo[i].GC1 =="pass"){
                   GC1.push(this.state.allInfo[i].GC1)
                 }
                atHome = GC1.length
                  //atHome = this.state.allInfo[i].Mjob.length
                //}
              }

              if(this.state.allInfo[i].GC1=="pass" && this.state.allInfo[i].Mjob == "other"){     
                //if(this.state.allInfo[i].Mjob == "at_home"){
                  other = this.state.allInfo[i].Mjob.length
                //}
              }
                // if(this.state.allInfo[i].Mjob == "other"){
                //   other = this.state.allInfo[i].Mjob.length
                // }
                if(this.state.allInfo[i].GC1=="pass" && this.state.allInfo[i].Mjob == "health"){     
                  //if(this.state.allInfo[i].Mjob == "at_home"){
                    Health = this.state.allInfo[i].Mjob.length
                  //}
                }
                // if(this.state.allInfo[i].Mjob == "health"){
                //   Health = this.state.allInfo[i].Mjob.length
                // }
                if(this.state.allInfo[i].GC1=="pass" && this.state.allInfo[i].Mjob == "services"){     
                  //if(this.state.allInfo[i].Mjob == "at_home"){
                    Services = this.state.allInfo[i].Mjob.length
                  //}
                }
                // if(this.state.allInfo[i].Mjob == "services"){
                //   Services = this.state.allInfo[i].Mjob.length
                // }
                if(this.state.allInfo[i].GC1=="pass" && this.state.allInfo[i].Mjob == "teacher"){     
                  //if(this.state.allInfo[i].Mjob == "at_home"){
                    Teacher= this.state.allInfo[i].Mjob.length
                  //}
                }
                // if(this.state.allInfo[i].Mjob == "teacher"){
                //   Teacher = this.state.allInfo[i].Mjob.length
                // }

              


              if(this.state.allInfo[i].GC2=="pass"){     
                if(this.state.allInfo[i].Mjob == "at_home"){
                  atHome2 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "other"){
                  other2 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "health"){
                  Health2 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "services"){
                  Services2 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "teacher"){
                  Teacher2 = this.state.allInfo[i].Mjob.length
                }

              }

              if(this.state.allInfo[i].GC3=="pass"){     
                if(this.state.allInfo[i].Mjob == "at_home"){
                  atHome3 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "other"){
                  other3 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "health"){
                  Health3 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "services"){
                  Services3 = this.state.allInfo[i].Mjob.length
                }
                if(this.state.allInfo[i].Mjob == "teacher"){
                  Teacher3 = this.state.allInfo[i].Mjob.length
                }

              }
           
            }

           
            const BarchartdataArray=[];
            const BarchartdataArray2=[];
            const BarchartdataArray3=[];

            //const BarchartdataArraySecond=[];
           // BarchartdataArraySecond.push( travelt2 , studyt2 ,freet2,absencesAmount2  );

            BarchartdataArray.push( 
            atHome,
            other,
            Health,
            Services,
            Teacher
              );
          BarchartdataArray2.push( 
            atHome2,
            other2,
            Health2,
            Services2,
            Teacher2
              );
            BarchartdataArray3.push( 
              atHome3,
              other3,
              Health3,
              Services3,
              Teacher3
                );
            // Set state
          this.setState({ 
            atHome:atHome,
            other:other,
            Health:Health,
            Services:Services,
            Teacher:Teacher,
            Barchartdata:BarchartdataArray,

            atHome2:atHome2,
            other2:other2,
            Health2:Health2,
            Services2:Services2,
            Teacher2:Teacher2,
            Barchartdata2:BarchartdataArray2,


            atHome3:atHome3,
            other3:other3,
            Health3:Health3,
            Services3:Services3,
            Teacher3:Teacher3,
            Barchartdata3:BarchartdataArray3,
             
            });

          // console.log(this.state.Barchartdata)


      })
    //   .catch(()=>{
    //     alert('Error retrieving data!!');
    // })
    }
    
  render()
  {
      return (<div> 
         <Bar
        data={{
          labels: ['At Home', 'Health', 'Other', 'Services', 'Teacher'],
          datasets: [
            {
              label: 'Pass on G1',
              data: this.state.Barchartdata,
              backgroundColor: [
                 '#a0b9ba',
                 '#a0b9ba',
                 '#a0b9ba',
                 '#a0b9ba',
                 '#a0b9ba',





                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'G2',
              data: this.state.Barchartdata2,
              backgroundColor: '#ba7d9d',
            },
            // {
            //   label: 'G3',
            //   data: this.state.Barchartdata3,
            //   backgroundColor: 'yellow',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={200}
        width={300}
        options={
          {
            title: {
              display: true,
              text: 'Number of Pass of G1 Regarding Mother Job'
          },
        //   maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true,
              gridLines: {
                display: false,
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
              type: 'linear',
            }]
          
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
    )
  }
}