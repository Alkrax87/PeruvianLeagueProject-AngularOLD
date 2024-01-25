import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';


interface Team {
  id: string;
  name: string;
  image: string;
  alt: string;
}

interface MatchResult {
  home: number | null;
  away: number | null;
}

interface MatchCard {
  homeTeam: Team;
  awayTeam: Team;
  result: MatchResult;
  round: string;
}

@Component({
  selector: 'app-liga2-fixture',
  templateUrl: './liga2-fixture.component.html',
  styleUrls: ['./liga2-fixture.component.css']
})
export class Liga2FixtureComponent {
  constructor(private dataLoadService: DataLoadServiceService){}

  // Variable para almacenar el indice de la jornada en juego
  selectedFixture: any;

  ngOnInit() {
    this.loadData();
  }

  //Cargar Data del JSON
  data:any;
  loadData() {
    this.dataLoadService.loadData(2).then((data: any) => {
      this.data = data;
      if (this.data) {
        this.selectedFixture = this.data.Info.fecha;
        this.showMatchResults();
      }
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }

  // Variable que almacena las llaves con un atributo de la jornada a la que pertenecen
  matchesByRound: any;

  // Variable que almacena el numero de jornadas
  fixtureIndex:any;

  // Proceso de mostrar Fixture y filtrar por cada jornada
  showMatchResults() {

    //Almacena todo el fixture del apertura o clausura en la variable matches
    const matches = this.data.Fixture;

    // Creamos un array para almacenar todas las llaves en la variable matchCards todavia sin el filtro por jornada
    const matchCards: MatchCard[] = [];

    // Creamos un array para guardar el numero de jornadas como un array
    const fixtureRounds: number[] = [];

    // Iterar sobre las jornadas y partidos y crear los MatchCard
    for (const key in matches) {

      // Almacenamos las llaves en la variable round filtrandolas por cada jornada
      const round = matches[key];

      //Almacenamos el numero de fechas como indices para usarlo en el Select
      fixtureRounds.push(Number(key));

      //Iteramos en cada llave dentro de round para asignar los resultados de cada partido
      round.forEach((match: { home: string; away: string }) => {
        // Buscar información sobre los equipos en el array de equipos
        const homeTeam: Team = this.data.Teams.find((team: Team) => team.id === match.home) || { id: "", name: "Por Definir", image: "", alt: "" };
        const awayTeam: Team = this.data.Teams.find((team: Team) => team.id === match.away) || { id: "", name: "Por Definir", image: "", alt: "" };

        // Obtener resultados del partido de cada equipo
        let result: MatchResult;
        if (homeTeam.id === "" || homeTeam.name === "Por Definir" || awayTeam.id === "" || awayTeam.name === "Por Definir") {
          result = { home: null, away: null };
        } else {
          result = this.getRealResult(homeTeam, awayTeam, Number(key));
        }

        // Crear el MatchCard con la informacion de los equipos y el resultado
        const matchCard: MatchCard = {
          homeTeam,
          awayTeam,
          result,
          round: key // Agrega la jornada a la que pertenece esa llave
        };

        //Agregar al array de matchCards las llaves con el filtro por cada joranda
        matchCards.push(matchCard);
      });
      this.matchesByRound = matchCards;
      this.fixtureIndex = fixtureRounds;
    }
  }

  // Función para obtener el resultado real
  getRealResult(teamHome: any, teamAway: any, gameNumber: number): MatchResult {
    const TeamH = teamHome.league.find((game: any) => game.game === gameNumber);
    const TeamA = teamAway.league.find((game: any) => game.game === gameNumber);
    return {
      home: TeamH.score !== null && TeamH.score !== undefined ? TeamH.score : "",
      away: TeamA.score !== null && TeamA.score !== undefined ? TeamA.score : "",
    };
  }

  getRandomResult(): MatchResult {
    // Implementa tu lógica para obtener resultados aleatorios o reales
    return {
      home: Math.floor(Math.random() * 5),
      away: Math.floor(Math.random() * 5)
    };
  }
}
