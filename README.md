<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ozzythecoder/wknd-redux-feedback-loop">
    <img src="https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Redux Feedback Loop</h3>

  <p align="center">
    A small app to collect anonymous feedback.
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The Redux Feedback Loop is a short, four-part questionnaire app to collect feedback from an anonymous user. This project is my first full-stack app using the PERN stack. [A deployed version of this app is available on Heroku.](https://wknd-redux-feedback.herokuapp.com/#/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* PostgresQL
* Node.js & Express
* Deployed via [Heroku](http://www.heroku.com)
* Database hosted by [bit.io](http://bit.io)
* Google's [Material Symbols Font](https://fonts.google.com/icons)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Install the latest version of Node Package Manager:
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone this repository
   ```sh
   git clone https://github.com/ozzythecoder/wknd-redux-feedback-loop.git
   ```
2. Install NPM dependencies
   ```sh
   npm install
   ```
3. Build your postgreSQL database according to the included `data.sql` file
4. Initialize the server
   ```js
   npm run server;
   ```
5. Open a new terminal window, and intialize the development client
   ```js
   npm run client;
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Click the BEGIN button to begin the feedback survey.
* The survey consists of three mandatory fields, accepting a number rating from 1 to 5.
  * Upon clicking the "next" button, the page will reject any input that is not a number from 1 to 5.
* The fourth part of the survey is an optional text field for additional comments. Click the REVIEW button to move on.
* The review screen allows the user to review their feedback before submitting it. They can click the back button to edit their input, as long as their new inputs also pass validation.
* Upon clicking SUBMIT, the user's feedback will be posted to the database, and the user will be moved to a success screen.
* The success screen confirms the user's submission, and allows the user to begin a new feedback loop.
* There is also an admin view at `/admin` that lists all posted feedback in order of most to least recent. The admin can delete any piece of feedback by clicking the associated delete button.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/ozzythecoder/wknd-redux-feedback-loop](https://github.com/ozzythecoder/wknd-redux-feedback-loop)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thank you to my instructors and cohort at Prime Coding Academy for empowering me to complete this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ozzythecoder/wknd-redux-feedback-loop.svg?style=for-the-badge
[contributors-url]: https://github.com/ozzythecoder/wknd-redux-feedback-loop/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ozzythecoder/wknd-redux-feedback-loop.svg?style=for-the-badge
[forks-url]: https://github.com/ozzythecoder/wknd-redux-feedback-loop/network/members
[stars-shield]: https://img.shields.io/github/stars/ozzythecoder/wknd-redux-feedback-loop.svg?style=for-the-badge
[stars-url]: https://github.com/ozzythecoder/wknd-redux-feedback-loop/stargazers
[issues-shield]: https://img.shields.io/github/issues/ozzythecoder/wknd-redux-feedback-loop.svg?style=for-the-badge
[issues-url]: https://github.com/ozzythecoder/wknd-redux-feedback-loop/issues
[license-shield]: https://img.shields.io/github/license/ozzythecoder/wknd-redux-feedback-loop.svg?style=for-the-badge
[license-url]: https://github.com/ozzythecoder/wknd-redux-feedback-loop/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/august-mcallister
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 