import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  conversations=[
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"},
    {name:"Anand" ,time :"8:21",latestMessage:"good Morning"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
