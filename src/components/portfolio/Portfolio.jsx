import React from 'react';
import IMG1 from '../../assets/IMG1.png';
import IMG2 from '../../assets/IMG2.png';
import IMG3 from '../../assets/IMG3.png';
import IMG4 from '../../assets/IMG4.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {

      id: 4,
      title: 'Fitness exercises app',
      img: IMG4,
      description: 'Browse through a variety of hundreds of exercises for the whole body shows, correct way of doing the exercises with animated gif and related youtube videos',
      technologies: 'React | RapidAPI | JavaScript',
      link: '',
      github: 'https://github.com/hardikbhasin/fitness-exercises-app',
    },
    {
      id: 1,
      title: 'Quiz-App',
      img: IMG1,
      description:
        'A quiz web-app in 22 sub-categories with three levels- easy/medium and Hard questions. Build with the help of react hooks and states.',
      technologies: 'React | API | Javascript',
      link: 'https://quiz-app-seven-amber.vercel.app/',
      github: 'https://github.com/hardikbhasin/quiz-app',
    },
    {
      id: 2,
      title: 'To-Do app',
      img: IMG2,
      description:
        'A To-Do web app built using basic React & React hooks, to create a to-do list. The edit option is available with each to-do to update, along with a option to remove from the list.',
      technologies: 'React | Javascript',
      link: 'https://to-do-app-hardikbhasin.vercel.app/',
      github: 'https://github.com/hardikbhasin/todo-app',
    },
    {
      id: 3,
      title: 'Random Quote Generator',
      img: IMG3,
      description: 'A random quote generator that generates and display the motivatioanla quote on screen with the author name.',
      technologies: 'JavaScript',
      link: 'https://hardikbhasin.github.io/randomQuote/',
      github: 'https://github.com/hardikbhasin/randomQuote',
    },




  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;