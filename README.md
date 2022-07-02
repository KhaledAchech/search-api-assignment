<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">Search API</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#used-modules">Used Modules</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#notes">Notes</a>
      <ul>
        <li><a href="#output">Output Files</a></li>
        <li><a href="#tests">Test Samples</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a great learning opportunity from Incedo as an assignment to learn how to use the last.fm api and use it to retrieve artists data based on the name of the artist as a searchterm then create a csv file containing specific fileds of the result data, if however no data was retrieved from the api, the request should redirect it attention to look through out a json source file for the artists.

This has been a really fun assignment for me.

### Built With

- [NodeJs](https://nodejs.org/en/)
- [ExpressJs](https://expressjs.com/)

### Used Modules

- [axios](https://www.npmjs.com/package/axios)
- [csv-writer](https://www.npmjs.com/package/csv-writer)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

GETTING STARTED

## Getting Started

Setting up the project locally.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KhaledAchech/search-api-assignment.git
   ```
2. install the necessary packages by running

   ```sh
   npm i
   ```

3. Include the dotenv file in the project root directory and change your last.fm api key accordingly.

   ```sh
   API_KEY = &api_key=MY_API_KEY
   ```

4. run the server with npm start.
   ```sh
   npm start
   ```

### Notes

- Output files : I kept the output files out of the .gitignore to provide some samples of my results.
- Test samples : I added some of the tests I ran using postman in the folder called test in a json collection file.
