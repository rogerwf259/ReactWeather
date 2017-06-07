import React from 'react';

const About = () => {
    return (
      <div className="section">
        <h1 className="text-center page-title">About Section</h1>
        <p>This is a weather app built on React</p>
        <p>Here are some of the tools I used: </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react/">React</a>- This was the Javascript framework used
            </li>
            <li>
                <a href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
            </li>
        </ul>
      </div>
    );
}

export default About;
