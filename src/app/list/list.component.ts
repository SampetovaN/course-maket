import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Course, Query} from "../../types";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses: Course[]
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery<Query>({
      query: gql`
      query courses {
         courses {
         id
         title
         author
         description
         topic
         url
         }
      }
          `
    })
      .valueChanges
      .subscribe(({ data}) => {
        this.courses = data.courses;
      });
  }

}
