import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from '../NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Sam Vecenie, Jon Krawczynski",
            "title": "Will Nikola Jokić be suspended after his run-in with Suns owner Mat Ishbia? What we expect the NBA to do - The Athletic",
            "description": "Jokić and the Suns owner got into a rare confrontation that led to a tech for the Nuggets star. But will that be the end of it?",
            "url": "https://theathletic.com/4497780/2023/05/08/nikola-jokic-suns-owner-mat-ishbia-suspension/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/05/07234035/GettyImages-1253045890-1024x715.jpg",
            "publishedAt": "2023-05-08T08:00:35Z",
            "content": "Denver Nuggets center and two-time NBA MVP Nikola Joki was assessed a technical foul for making contact with Phoenix Suns owner Mat Ishbia during the second quarter of Game 4 of a Western Conference … [+10596 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBC 5 Dallas-Fort Worth"
            },
            "author": "Allie Spillyards",
            "title": "Families Begin to Identify Victims in Deadly Allen Mall Shooting - NBC 5 Dallas-Fort Worth",
            "description": "The family of Christian LaCour confirmed the 20-year-old Farmersville resident was among those eight victims.",
            "url": "https://www.nbcdfw.com/news/local/families-begin-to-identify-victims-in-deadly-allen-mall-shooting/3252973/",
            "urlToImage": "https://media.nbcdfw.com/2023/05/Allen-Shooting-Victim.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2023-05-08T06:56:59Z",
            "content": "Following Saturdays deadly shooting at Allen Premium Outlets, officials confirmed eight people had been killed.\r\nSunday, the family of Christian LaCour confirmed the 20-year-old Farmersville resident… [+1036 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Driver arrested after 7, including migrants, killed in Brownsville, Texas - Reuters",
            "description": "At least seven pedestrians were killed and several others injured on Sunday when an SUV mowed down people near a homeless shelter that attends to migrants in Brownsville, Texas, police said.",
            "url": "https://www.reuters.com/world/us/7-dead-after-car-runs-into-pedestrians-brownsville-texas-abc-news-2023-05-07/",
            "urlToImage": "https://www.reuters.com/resizer/598z86BInDGIc7cc2ZnY1r9RR-M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DGAXA2N6UVNWRC2AG4XSZ2NZ6I.jpg",
            "publishedAt": "2023-05-08T06:50:00Z",
            "content": "May 7 (Reuters) - At least seven pedestrians were killed and several others injured on Sunday when an SUV mowed down people near a homeless shelter that attends to migrants in Brownsville, Texas, pol… [+1671 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Tim MacMahon",
            "title": "Devin Booker shrugs off historic efficiency as Suns even series - ESPN - ESPN",
            "description": "Devin Booker continued his phenomenal playoff run by scoring 36 points, matching teammate Kevin Durant, while going 14-of-18 from the field in Sunday's series-tying Game 4 win over the Nuggets.",
            "url": "https://www.espn.com/nba/story/_/id/37559173/devin-booker-shrugs-historic-efficiency-suns-even-series-nuggets",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0508%2Fr1170181_1296x729_16%2D9.jpg",
            "publishedAt": "2023-05-08T06:19:00Z",
            "content": "PHOENIX -- Phoenix Suns superstar Devin Booker doesn't want to be bothered with digging too deep into the analysis of his historic hot streak.\r\nBooker continued his phenomenal playoff run by scoring … [+4707 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Namita Singh",
            "title": "Jordan Neely – latest: Protesters block NYC subway as ex-Marine identified in chokehold death - The Independent",
            "description": "Jordan Neely video and latest updates",
            "url": "https://www.independent.co.uk/news/world/americas/crime/jordan-neely-cause-death-subway-killing-latest-b2334688.html",
            "urlToImage": "https://static.independent.co.uk/2023/05/06/21/Screen%20Shot%202023-05-06%20at%204.34.12%20PM.png?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-05-08T06:05:15Z",
            "content": "New York was not a safe city for Jordan Neely\r\nNoah Berlatsky writes for The Independent:\r\nOn Monday, a Black houseless man with a history of mental illness, Jordan Neely, was shouting at passengers … [+1165 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Georgia Nicols",
            "title": "Horoscope for Monday, May 8, 2023 - Chicago Sun-Times",
            "description": null,
            "url": "https://chicago.suntimes.com/2023/5/8/23698611/horoscopes-today-monday-may-8-2023",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/32fa277/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FTPqDdHRs6u5fubIpB6_tboJ3rTQ%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24611564%2FGeorgia_mug.jpeg",
            "publishedAt": "2023-05-08T05:01:57Z",
            "content": "Moon Alert\r\nAvoid shopping or important decisions from 3 to 7 p.m. Chicago time. After that, the moon moves from Sagittarius into Capricorn.\r\nAries (March 21-April 19)\r\nYou feel adventurous! Its the … [+3740 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Exclusive: Bain Capital seeks to raise $4 billion for new global special situations fund - Reuters",
            "description": "Bain Capital is seeking to raise $4 billion for a new global \"special situations fund\" as the U.S. firm sees an opportunity to snap up distressed investments in a broad range of asset classes, two people familiar with the matter said.",
            "url": "https://www.reuters.com/business/finance/bain-capital-seeks-raise-4-bln-new-global-special-situations-fund-sources-2023-05-08/",
            "urlToImage": "https://www.reuters.com/resizer/kNSQT7yxDuapAl0GNJRHNOf4XaU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KQ6I3Q6DGFLB7FB3ZLDXRTU7GM.jpg",
            "publishedAt": "2023-05-08T04:41:00Z",
            "content": "HONG KONG/NEW YORK, May 8 (Reuters) - Bain Capital is seeking to raise $4 billion for a new global \"special situations fund\" as the U.S. firm sees an opportunity to snap up distressed investments in … [+2887 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Eric Platt",
            "title": "Warren Buffett's chosen successor learns to relish Berkshire spotlight - Financial Times",
            "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
            "url": "https://www.ft.com/content/921543ad-d568-44b1-9582-77d1d1184125",
            "urlToImage": null,
            "publishedAt": "2023-05-08T04:01:10Z",
            "content": "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Charles Trepany",
            "title": "'American Idol': Watch King Charles, Camilla make surprise appearance - USA TODAY",
            "description": "\"American Idol\" contestants just got a royal hello from Windsor Castle. Watch King Charles and Queen Consort Camilla's surprise appearance here.",
            "url": "https://www.usatoday.com/story/entertainment/tv/2023/05/07/american-idol-king-charles-camilla-make-surprise-appearance/70193266007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/05/08/USAT/92ef0dce-c967-4aa4-bcbf-710a8d824cce-169317_1935.jpg?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp",
            "publishedAt": "2023-05-08T03:50:24Z",
            "content": "\"American Idol\"contestants just got a royal, if sleepy, hello from Windsor Castle.\r\nThe ABC singing competition returned Sunday night for another live coast-to-coast broadcast in which the top 8 sing… [+7166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SpaceNews"
            },
            "author": "Jeff Foust",
            "title": "Rocket Lab launches NASA TROPICS cubesats - SpaceNews",
            "description": "A Rocket Lab Electron launched a pair of NASA cubesats May 7 designed to monitor the development of tropical storms.",
            "url": "https://spacenews.com/rocket-lab-launches-nasa-tropics-cubesats/",
            "urlToImage": "https://spacenews.com/wp-content/uploads/2023/05/electron-tropics1.jpg",
            "publishedAt": "2023-05-08T02:43:20Z",
            "content": "WASHINGTON A Rocket Lab Electron launched a pair of NASA cubesats designed to monitor the development of tropical storms, 11 months after the first satellites in the constellation were lost when a di… [+3849 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The A.V. Club"
            },
            "author": "Matt Schimkowitz",
            "title": "Barry recap: season 4, episode 5, “tricky legacies” - The A.V. Club",
            "description": "As the show doubles down on darkness, Barry and Sally lose themselves and find meaner pastures",
            "url": "https://www.avclub.com/barry-review-season-4-episode-5-tricky-legacies-1850398062",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fee4cd282668ad61363d257171a2fb85.jpg",
            "publishedAt": "2023-05-08T02:40:00Z",
            "content": "Its been eight years since Barry and Sally escaped Los Angeles for the desolate plains of Wherever The Hell They Are, U.S.A. Cutting themselves off from Hollywood, their families, and the ghosts haun… [+12166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Nightly News Full Broadcast (May 7th) - NBC News",
            "description": "Community mourns after gunman kills 8 at Texas outlet mall; Survivors share experiences after deadly mass shooting at Texas outlet mall; Man plows car into g...",
            "url": "https://www.youtube.com/watch?v=-2w72VFPRI8",
            "urlToImage": "https://i.ytimg.com/vi/-2w72VFPRI8/maxresdefault.jpg",
            "publishedAt": "2023-05-08T02:34:51Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Kimberly Nordyke",
            "title": "MTV Movie & TV Awards: Full List of Winners - Hollywood Reporter",
            "description": "During a show that pivoted last-minute from live to pretaped due to the writers strike, 'Scream VI' was named best movie, while 'The Last of Us' won the Golden Popcorn trophy for best show.",
            "url": "https://www.hollywoodreporter.com/movies/movie-news/mtv-movie-tv-awards-2023-winners-list-1235479868/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/matva-2023-photos-__Scream_02_1920x1080.jpg?w=1024",
            "publishedAt": "2023-05-08T02:15:00Z",
            "content": "Scream VI was named best movie on Sunday night at the 2023 MTV Movie &amp; TV Awards, which pivoted at the last minute from live to pretaped due to the writers strike,\r\nThe film also won best fight f… [+6322 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jihye Lee, Lim Hui Jie",
            "title": "Asia markets are trading mixed after Wall Street rebound on Friday - CNBC",
            "description": "Asian markets are largely up after Wall Street snapped a four day losing streak on Friday",
            "url": "https://www.cnbc.com/2023/05/08/asia-markets-wall-street-rebounds-on-friday.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107156716-1669271308410-gettyimages-623544546-hv6b9453.jpeg?v=1683503621&w=1920&h=1080",
            "publishedAt": "2023-05-08T01:47:37Z",
            "content": "A number of economic data releases are expected next week for Asia-Pacific markets, including China's inflation data, India's industrial production and the Philippines' trade balance.\r\nOn Monday, Tai… [+1119 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Closer to Earth Than Ever Before: MIT Astronomers Detect Black Hole Devouring a Star - SciTechDaily",
            "description": "The event was spotted in infrared data — also a first — suggesting further searches in this band could turn up more such bursts. MIT astronomers have discovered a new tidal disruption event in infrared, providing insights into how supermassive black holes rip…",
            "url": "https://scitechdaily.com/closer-to-earth-than-ever-before-mit-astronomers-detect-black-hole-devouring-a-star/",
            "urlToImage": "https://scitechdaily.com/images/Star-Spaghettification-Black-Hole.gif",
            "publishedAt": "2023-05-08T01:42:11Z",
            "content": "ByJennifer Chu, Massachusetts Institute of TechnologyMay 7, 2023\r\nThis animation depicts a star experiencing spaghettification as its sucked in by a supermassive black hole during a tidal disruption … [+11325 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Larry Neumeister",
            "title": "Trump rejects last chance to testify at New York civil trial - The Associated Press",
            "description": "NEW YORK (AP) — Former President Donald Trump rejected his last chance Sunday to testify at a civil trial where a longtime advice columnist has accused him of raping her in a luxury department store dressing room in 1996.",
            "url": "https://apnews.com/article/trump-rape-carroll-trial-40f9bf3da2474c28dc2bc869d68fdb82",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/7c774e4dbf2e457e9a36f7b4f35098ae/2000.webp",
            "publishedAt": "2023-05-08T01:20:38Z",
            "content": "NEW YORK (AP) Former President Donald Trump rejected his last chance Sunday to testify at a civil trial where a longtime advice columnist has accused him of raping her in a luxury department store dr… [+3622 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "WBZ-News Staff",
            "title": "School bus strike averted in Framingham, still on in Marlboro and Westboro - CBS Boston",
            "description": "Teamsters Local 170 said both sides have agreed to a tentative contract deal Sunday evening for the Framingham school district.",
            "url": "https://www.cbsnews.com/boston/news/framingham-marlboro-westboro-school-bus-strike-averted/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/07/cd83f4c2-761b-41e2-aff4-23a8aacbdad2/thumbnail/1200x630/bcd9dd8fbc2d0fa19ac92ea545669a8d/creative-clean-sun-630-7pm-20230507.jpg",
            "publishedAt": "2023-05-08T01:06:00Z",
            "content": "FRAMINGHAM - A school bus driver strike was averted Sunday evening in Framingham, but the union confirms it's still on in Marlboro and Westboro.\r\nThe NRT bus company provides services to Framingham, … [+635 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "ScienceAlert",
            "title": "The World's First RSV Vaccine Just Got Approved in The US - ScienceAlert",
            "description": null,
            "url": "https://www.sciencealert.com/the-worlds-first-rsv-vaccine-just-got-approved-in-the-us",
            "urlToImage": null,
            "publishedAt": "2023-05-08T00:52:26Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Formula 1"
            },
            "author": "F1",
            "title": "Verstappen overhauls Perez for Miami GP victory as Red Bull intra-team battle steps up a gear - Formula 1",
            "description": "Max Verstappen struck back in the 2023 title race by beating Red Bull team mate Sergio Perez to victory during Sunday’s Miami Grand Prix, recovering from ninth on the grid to pass the pole-sitter in the closing stages of an intriguing, strategic race.",
            "url": "https://www.formula1.com/en/latest/article.verstappen-overhauls-perez-for-miami-gp-victory-as-red-bull-intra-team.2kT6YBUWwBlnM8LXoRdpeU.html",
            "urlToImage": "https://media.formula1.com/image/upload/f_auto/q_auto/v1683492526/perez-verstappen-miami-2.png",
            "publishedAt": "2023-05-08T00:22:18Z",
            "content": "Max Verstappen struck back in the 2023 title race by beating Red Bull team mate Sergio Perez to victory during Sundays Miami Grand Prix, recovering from ninth on the grid and passing the pole-sitter … [+13773 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "King Charles' coronation celebration continues with concert and \"big lunch\" - CBS News",
            "description": "Charles and Queen Camilla​ said Sunday in a statement that they were \"deeply touched\" by the celebration.",
            "url": "https://www.cbsnews.com/news/king-charles-coronation-celebration-concert-big-lunch/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/05/07/17029305-309a-48c8-9102-40d8c233f9a0/thumbnail/1200x630/304b4217eea649335980d4ddb6cc8142/gettyimages-1488222817.jpg",
            "publishedAt": "2023-05-07T23:22:00Z",
            "content": "At coronation celebrations held Sunday, anyone could wear a crown — even a dog.\r\nA day after the gilded spectacle of King Charles III's crowning in an ancient religious ceremony, festivities took a m… [+7392 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles
        }

    }

    render() {
        return (
            <div className='container my-4'>
                <h2>NewsHub -Topheadlines</h2>

                <div className='row'>
                    {this.state.articles.map((element) => {
                    return<div className='col-lg-4' key={element.url}>
                    <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ''}
                        description={element.description ? element.description.slice(0, 88) : ''}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                    />
                </div>
                
                    })}
                </div>
            </div>
        )
    }
}

export default News