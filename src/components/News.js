import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "lequipe",
        "name": "L'equipe"
      },
      "author": "L'EQUIPE",
      "title": "Les Mousquetaires de Paris débutent leur histoire en Ligue européenne",
      "description": "Pour la première fois en France, une franchise professionnelle de football américain voit le jour. À partir de samedi, les Mousquetaires de Paris vont disputer l'ELF, le championnat européen. Avec des ambitions sportives et populaires.",
      "url": "https://www.lequipe.fr/Football-americain/Actualites/Les-mousquetaires-de-paris-debutent-leur-histoire-en-ligue-europeenne/1399723",
      "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/les-mousquetaires-de-paris-sont-prets-a-entrer-en-scene-en-elf-m-le-pihif-dr/1500000001792060/0:0,817:544-640-427-75/8d5e7.jpg",
      "publishedAt": "2023-06-03T07:00:00+00:00",
      "content": "C'est une belle année pour les mousquetaires : le chef-d'oeuvre d'Alexandre Dumas a fait son retour sur grand écran et une équipe de football américain est née à Paris. Sauf que là, ils ne seront pas… [+4007 chars]"
    },
    {
      "source": {
        "id": "talksport",
        "name": "TalkSport"
      },
      "author": "Connor Andrews",
      "title": "Feyenoord brutally mock crying Jose Mourinho after beating him to Champions League football...",
      "description": "Feyenoord have posted a brutal takedown of Jose Mourinho, avenging his outburst against them in the quarter-finals. Roma beat the Dutch side on their way to Budapest, where they lost to Sevilla on …",
      "url": "https://talksport.com/football/1444328/feyenoord-mock-crying-jose-mourinho-champions-league-football/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/TALKSPORT-MOURINHO-FEYENOORD.png?strip=all&quality=100&w=1500&h=1000&crop=1",
      "publishedAt": "2023-06-02T16:51:00Z",
      "content": "Feyenoord have posted a brutal takedown of Jose Mourinho, avenging his outburst against them in the quarter-finals.\r\nRoma beat the Dutch side on their way to Budapest, where they lost to Sevilla on p… [+1792 chars]"
    },
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Ryan Dabbs, Caio Carrieri",
      "title": "Fred reveals which Liverpool and Manchester City players he hangs out with in his spare time",
      "description": "Despite Manchester United's rivalries, Fred finds time for some opposition players outside of football",
      "url": "https://www.fourfourtwo.com/news/fred-reveals-which-liverpool-and-manchester-city-players-he-hangs-out-with-in-his-spare-time",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/MjDDAjN7wXnBETcQM6Mwj5-1200-80.jpg",
      "publishedAt": "2023-06-01T17:00:06Z",
      "content": "Fred has revealed he spends time with players from Liverpool and Manchester City away from football, the Manchester United midfielder enjoying the company of the Brazilian contingent situated in the … [+1649 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]
  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h3>GoNews - Top Headlines</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>
      </div>
    )
  }
}

export default News
