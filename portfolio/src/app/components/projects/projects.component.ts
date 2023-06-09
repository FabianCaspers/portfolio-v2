import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isDisabled = true;

  projects = [
    {
      title: 'Join',
      description: 'Join is a Kanban software that simplifies project management, optimizes workflows, and boosts productivity. With customizable boards and automated workflows, teams can track progress and collaborate seamlessly.',
      technologies: ['#HTML', '#CSS', '#JavaScript'],
      imageUrl: '../../../assets/join.png',
      liveTestUrl: 'https://join.fabiancaspers.com/',
      gitUrl: 'https://github.com/FabianCaspers/Join.git'
    },
    {
      title: 'Join 2.0',
      description: 'Join is a Kanban software that simplifies project management, optimizes workflows, and boosts productivity. With customizable boards and automated workflows, teams can track progress and collaborate seamlessly.',
      technologies: ['#HTML', '#CSS', '#JavaScript'],
      imageUrl: '../../../assets/join2.png',
      liveTestUrl: 'https://darkjoin.fabiancaspers.com/',
      gitUrl: 'https://github.com/FabianCaspers/join_dark.git'
    },
    {
      title: 'Pokedex',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      technologies: ['#HTML', '#CSS', '#JavaScript', '#API'],
      imageUrl: '../../../assets/pokedex.png',
      liveTestUrl: 'https://pokedex.fabiancaspers.com/index.html',
      gitUrl: 'https://github.com/FabianCaspers/pokedex.git'
    },
    {
      title: 'El Pollo Loco',
      description: 'In El Pollo Loco, players help Pepe fight off chickens using a throwable glass bottle and the ability to jump on them. It\'s a unique and fun game for all ages.',
      technologies: ['#HTML', '#CSS', '#JavaScript'],
      imageUrl: '../../../assets/polloloco.png',
      liveTestUrl: 'https://elpolloloco.fabiancaspers.com/index.html',
      gitUrl: 'https://github.com/FabianCaspers/elpolloloco.git'
    },
    {
      title: 'Personal Portfolio',
      description: 'My portfolio features projects utilizing Angular, showcasing visually captivating with a focus on web development.',
      technologies: ['#HTML', '#SCSS', '#Angular'],
      imageUrl: '../../../assets/new-portfolio.png',
      liveTestUrl: 'https://fabiancaspers.com/',
      gitUrl: 'https://github.com/FabianCaspers/portfolio-v2.git'
    },
    {
      title: 'Chatterix',
      description: 'Chatterix is a clone based in Slack.',
      technologies: ['#HTML', '#SCSS', '#Angular'],
      imageUrl: '../../../assets/coming.png',
    },
    {
      title: '7vsWild 3D FanMade',
      description: 'I\'m a big fan of 7vsWild. So I started my own 3D mini Project',
      technologies: ['#HTML', '#CSS', '#JavaScript'],
      imageUrl: '../../../assets/7vswild.png',
    }
  ];

  getTechClass(tech: string): string {
    const techWithoutHash = tech.replace('#', '');
    switch (techWithoutHash) {
        case 'HTML':
            return 'blue';
        case 'CSS':
            return 'green';
        case 'JavaScript':
        case 'Angular':
            return 'red';
        case 'SCSS':
        case 'API':
            return 'blue';
        default:
            return '';
    }
}

}
