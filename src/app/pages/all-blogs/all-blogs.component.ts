import { Component, Inject } from '@angular/core';
import { Blog } from './all-blogs.data';
import { BlogsService } from 'src/app/services/blogs.service';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent {
  latestBlogs: Blog[] = [];
  otherBlogs: Blog[] = [];

  constructor(private blogService: BlogsService, private router: Router, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page when navigating to a new component
        this.document.documentElement.scrollTop = 0;
      }
    })
    this.blogService.getAllBlogs().subscribe(
      (blogs: Blog[]) => {
        // Parse the date strings into Date objects
        //@ts-ignore
        console.log(blogs.data, "blog data")
         //@ts-ignore
        blogs.data.forEach(blog => {
          blog.date = new Date(blog.date); // Convert the date string to a Date object
        });

        // Ensure that the blogs variable is an array before applying the sort
        if (Array.isArray(blogs)) {
          // Sort the blogs array based on the date (newest to oldest)
          blogs.sort((a, b) => b.attributes.date.getTime() - a.attributes.date.getTime());
        }

        // Split the blogs array into the latestBlogs (first 5 items) and otherBlogs (excluding first 5 items)
        //@ts-ignore
        this.latestBlogs = blogs.data.slice(5);
        console.log(this.latestBlogs, "this.latestBlogs")
        //@ts-ignore
        this.otherBlogs = blogs.data.slice(0,6);
        console.log(this.otherBlogs, "this.otherBlogs")
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
