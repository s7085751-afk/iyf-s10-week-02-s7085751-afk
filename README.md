# Week 02: CSS Mastery - Portfolio Styling

## Author
- **Name:** Sharleen Salma
- **GitHub:** @s7085751-afk
- **Date:** April 17, 2026 

## Project Description
This week, I transformed my static HTML portfolio into a fully styled, professional, and responsive website. The goal was to master CSS fundamentals, including the Box Model, Typography, and modern layout techniques like Flexbox and CSS Grid to ensure the site looks great on all devices.

## Technologies Used
- HTML5
- CSS3 (Custom Properties/Variables)
- Flexbox & CSS Grid
- Google Fonts (Typography)
- Mobile-First Responsive Design

## Features
- **Responsive Navigation:** A mobile-friendly navbar that switches from a vertical menu to a horizontal layout on larger screens.
- **Project Grid:** A dynamic grid layout for displaying projects that adjusts columns based on screen size (1 col for mobile, 2 for tablet, 3 for desktop).
- **Custom Color System:** Implemented a consistent brand palette using CSS variables for primary, secondary, and background colors.
- **Interactive Elements:** Smooth transitions and hover states for buttons, links, and project cards to improve user experience.
- **Typography System:** A scalable font system ranging from `xs` to `4xl` for consistent hierarchy.

## How to Run
1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/s7085751-afk/iyf-s10-week-02-s7085751-afk.git](https://github.com/s7085751-afk/iyf-s10-week-02-s7085751-afk.git)
 2.Navigate to the project folder.
  3.Open index.html in your preferred web browser to view the portfolio.

## Lessons Learned
**Mobile-First Approach:** I learned that it is much easier to design for the smallest screen first and then add complexity for larger screens using media queries.

**The Power of CSS Variables:** Using :root variables made it incredibly easy to update the entire color scheme and font scale from one central location.

**Flexbox vs. Grid:** I gained a better understanding of when to use Flexbox (for one-dimensional layouts like navbars) vs. CSS Grid (for two-dimensional layouts like project galleries).

## Challenges Faced
**Center-aligning Hero Content:** I initially struggled with perfectly centering text over a full-viewport background image. I solved this by using Flexbox with justify-content: center and align-items: center on the parent container.

**Grid Responsiveness:** Managing different column counts for different devices was tricky. I overcame this by practicing with @media breakpoints and utilizing the grid-template-columns: repeat(auto-fit, minmax(...)) property.  

## Live Demo
https://github.com/s7085751-afk/iyf-s10-week-02-s7085751-afk?authuser=0
