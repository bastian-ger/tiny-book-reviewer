import React from 'react';

const About = (props) => {
  return (
    <main className="m-1 m-sm-3">
      <h3>About "tiny book reviewer":</h3>
      <p>This little app was my first playground for bringing everything I've initially
        learned about React and Redux to life. When coding this, the performance
        of the app was not important as the focus was clearly on testing my
        knowledge on React.</p>
      <p>
        These are the most important webdevelopment technologies I used for this app:
      </p>
      <ul>
        <li>Webpack</li>
        <li>React</li>
        <li>Redux</li>
        <li>Bootstrap</li>
        <li>Fontawesome</li>
        <li>Reactstrap</li>
        <li>OpenWeatherMap</li>
        <li>New York Times Books API</li>
        <li>Redux Blog Post API</li>
        <li>Dotenv Webpack</li>
        <li>Github Desktop</li>
        <li>Axios</li>
        <li>Lodash</li>
        <li>Babel</li>
      </ul>
      <p>
        Many thanks to all the developers and companies who developed and maintain these libraries,
        frameworks and APIs!
      </p>
    </main>
  );
}

export default About;
