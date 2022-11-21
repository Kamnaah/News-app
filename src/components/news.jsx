import React, { Component } from "react";
import NewsItems from "./newsItems";

export class News extends Component {
  //static article data...
  articles = [
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Disney Brings Back Robert Iger After Ousting Chapek as C.E.O. - The New York Times",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiQ2h0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjIvMTEvMjAvYnVzaW5lc3MvZGlzbmV5LXJvYmVydC1pZ2VyLmh0bWzSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-11-21T03:40:32Z",
      content: null,
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Gunman kills 5 in Colorado LGBTQ nightclub before he is stopped by patrons - Reuters",
      description:
        'A gunman opened fire inside an LGBTQ nightspot in Colorado Springs late on Saturday, killing at least five people and injuring 25 others before being stopped by "heroic" clubgoers, police said.',
      url: "https://www.reuters.com/world/us/five-dead-18-injured-nightclub-shooting-colorado-police-2022-11-20/",
      urlToImage:
        "https://www.reuters.com/resizer/8Pn-IlEzx5zMebpqKHc_ev4-M_A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QAEWQCH6GRPH5GCNNBJLOO5HCA.jpg",
      publishedAt: "2022-11-21T03:39:00Z",
      content:
        "COLORADO SPRINGS, Colo., Nov 20 (Reuters) - A gunman opened fire inside an LGBTQ nightspot in Colorado Springs late on Saturday, killing at least five people and injuring 25 others before being stopp… [+4833 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Ukraine says Russians pounding frontline positions with artillery - Reuters UK",
      description:
        "Russian forces are pounding Ukrainian positions with artillery fire and in the eastern region alone launched almost 400 strikes on Sunday, President Volodymyr Zelenskiy said in a video address.",
      url: "https://www.reuters.com/world/ukraine-says-russians-pounding-frontline-positions-with-artillery-2022-11-20/",
      urlToImage:
        "https://www.reuters.com/resizer/Yx0uJ6aJMRP6H6depxISPgqG4ek=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6QFG2BC6S5L5DNDAEO5KZQCAWQ.jpg",
      publishedAt: "2022-11-21T03:34:00Z",
      content:
        "LVIV, Ukraine, Nov 20 (Reuters) - Russian forces are pounding Ukrainian positions with artillery fire and in the eastern region alone launched almost 400 strikes on Sunday, President Volodymyr Zelens… [+3088 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Evelyn Cheng",
      title:
        "Mainland China reports first Covid-related deaths since the Shanghai lockdown - CNBC",
      description:
        "Three people died over the weekend after contracting Covid, the first deaths from the virus that mainland China has recorded since May.",
      url: "https://www.cnbc.com/2022/11/21/mainland-china-reports-first-covid-related-deaths-since-shanghai-lockdown.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107154599-1668989941844-gettyimages-1244893026-AFP_32NY62M.jpeg?v=1669001502&w=1920&h=1080",
      publishedAt: "2022-11-21T03:31:00Z",
      content:
        "This restaurant, along with many others in Beijing's business district of Chaoyang, had to suspend dine-in services over the weekend as Covid infections soared.\r\nBEIJING Three people died over the we… [+2626 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "‘The Walking Dead’ Ends With a Promise of More Life - The New York Times",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiVmh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjIvMTEvMjAvYXJ0cy90ZWxldmlzaW9uL3RoZS13YWxraW5nLWRlYWQtc2VyaWVzLWZpbmFsZS5odG1s0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-11-21T03:30:06Z",
      content: null,
    },
    {
      source: { id: null, name: "WABC-TV" },
      author: null,
      title:
        "Buffalo snowstorm 2022: Lake-effect snow buries northern New York - WABC-TV",
      description:
        "Parts of New York are finally catching a break after a storm dumped snow for days on cities and towns east of Lake Erie and Lake Ontario.",
      url: "https://abc7ny.com/buffalo-snowstorm-weather-77-inches/12474740/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/12474801_112022-wabc-buffalo2-img.jpg?w=1600",
      publishedAt: "2022-11-21T02:30:02Z",
      content:
        "BUFFALO, New York -- Parts of New York finally caught a break Sunday after a storm spent days dumping a potentially record-setting amount of snow on cities and towns east of Lake Erie and Lake Ontari… [+2272 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Taylor Swift Accepts the 2022 AMA for Favorite Pop Album - The American Music Awards - ABC",
      description:
        "Watch Taylor Swift's AMAs 2022 acceptance speech for Favorite Pop Album. Watch more highlights from 'The 2022 American Music Awards' on ABC and Stream Next D...",
      url: "https://www.youtube.com/watch?v=L3nHHa_9lZU",
      urlToImage: "https://i.ytimg.com/vi/L3nHHa_9lZU/maxresdefault.jpg",
      publishedAt: "2022-11-21T02:16:45Z",
      content: null,
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Lindsey Thiry",
      title:
        "Justin Herbert connects with Joshua Palmer for 50-yard TD vs Chiefs - ESPN",
      description:
        "The Bolts started with a bang, as Herbert found the second-year receiver wide open for a 50-yard touchdown pass on the Chargers' third play of the game.",
      url: "https://www.espn.com/nfl/story/_/id/35071707/justin-herbert-connects-joshua-palmer-50-yard-td-vs-chiefs",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1121%2Fr1094017_1296x729_16%2D9.jpg",
      publishedAt: "2022-11-21T02:03:00Z",
      content:
        "INFLEWOOD, Calif. -- Los Angeles Chargers wide receiver Mike Williams told ESPN going into a Week 11 matchup against the Kansas City Chiefs to expect the offense to provide explosive plays with him a… [+520 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Melissa Gaffney, Emily Shapiro",
      title:
        "Idaho college murders: Other friends were in house when 911 call made, police say - ABC News",
      description:
        "The four victims were killed in a house near campus a week ago.",
      url: "https://abcnews.go.com/US/idaho-college-murders-friends-house-911-call-made/story?id=93683102",
      urlToImage:
        "https://s.abcnews.com/images/US/idaho-friends-flt-ht-ps-221115_1668520238371_hpMain_16x9_992.jpg",
      publishedAt: "2022-11-21T00:46:46Z",
      content:
        "Police in Moscow, Idaho, said Sunday that other friends were in the house when a 911 call was made following the fatal stabbings of four University of Idaho students a week ago, but couldn't say how … [+3647 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Maura Judkis, Tyler Pager, Jada Yuan",
      title:
        "More details from Naomi Biden's White House wedding - The Washington Post",
      description:
        "Privacy and security prevailed on Saturday for Naomi Biden and Peter Neal's big day at the White House. Here’s what we found out anyway.",
      url: "https://www.washingtonpost.com/lifestyle/2022/11/20/naomi-biden-peter-neal-white-house-wedding-details/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HXIS37TI6QI63DIHZMLSGYAWCE.jpg&w=1440",
      publishedAt: "2022-11-21T00:22:29Z",
      content:
        "Comment on this story\r\nHow do you tell the story of a wedding you werent invited to attend one hosted in what may be the most public-yet-exclusive place in America to say I do?\r\nYou get creative. You… [+8729 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Bradford Betz",
      title:
        "Elon Musk drops one-emoji response to CBS returning to Twitter after brief hiatus - Fox Business",
      description:
        "Tesla CEO Elon Musk poked fun at CBS News for saying it would return to Twitter after previously saying it was suspending usage over security concerns.",
      url: "https://www.foxbusiness.com/politics/elon-musk-drops-one-emoji-response-cbs-returning-twitter-brief-hiatus",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/MUSK.jpg?ve=1&tl=1",
      publishedAt: "2022-11-20T23:21:15Z",
      content:
        "Tesla CEO Elon Musk appeared to poke fun at CBS Sunday afternoon for saying it was coming back to Twitter after temporarily suspending its usage on the platform over security concerns. \r\nThe news out… [+1737 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Paul Best",
      title:
        "Ukraine’s Zaporizhzhia nuclear plant rocked by 'powerful explosions,' UN nuclear agency says - Fox News",
      description:
        'The International Atomic Energy Agency said that "powerful explosions" rocked Ukraine\'s Zaporizhzhia nuclear power plant, causing damage to some buildings.',
      url: "https://www.foxnews.com/world/ukraines-zaporizhzhia-nuclear-plant-rocked-powerful-explosions-un-nuclear-agency-says",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/GettyImages-1243158260.jpg",
      publishedAt: "2022-11-20T23:16:19Z",
      content:
        'Ukraine\'s Zaporizhzhia nuclear power plant and the surrounding area was rocked by "powerful explosions" on Sunday, the International Atomic Energy Agency said. \r\nThe shelling caused damage to buildin… [+2708 chars]',
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Paul Best",
      title:
        "Cryptocurrency exchange FTX owes more than $3 billion to creditors - Fox Business",
      description:
        "Cryptocurrency exchange FTX, which filed for bankruptcy protection last week, said in a court filing that it owes its 50 largest creditors more than $3 billion.",
      url: "https://www.foxbusiness.com/technology/cryptocurrency-exchange-ftx-owes-more-than-3-billion-creditors",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/11/0/0/FTX-Bankruptcy.jpg?ve=1&tl=1",
      publishedAt: "2022-11-20T23:16:07Z",
      content:
        "FTX, the cryptocurrency exchange that collapsed earlier this month and filed for bankruptcy protection, said in a court filing on Saturday that it owes its 50 largest creditors more than $3 billion. … [+1856 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Jaylon Thompson, USA TODAY",
      title:
        "NFL Week 11 live scores, updates: Patriots win 14th straight against Jets - USA TODAY",
      description:
        "The NFL returns to Mexico City for special Week 11 matchup between the Arizona Cardinals and San Francisco 49ers on Monday night.",
      url: "https://www.usatoday.com/story/sports/nfl/2022/11/20/nfl-scores-schedule-latest-info-all-week-11-games/10728989002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/11/20/USAT/712a5289-3dcb-450c-9f5c-afe0aaa4f1b8-USP_NFL__Detroit_Lions_at_New_York_Giants.jpg?auto=webp&crop=3586,2017,x1,y0&format=pjpg&width=1200",
      publishedAt: "2022-11-20T22:52:30Z",
      content:
        "Career moments defined the early Week 11 slate.\r\nAtlanta Falcons running back Cordarrelle Patterson set an NFL record with his ninth career kickoff return touchdown. Patterson scored a 103-yard touch… [+11775 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "President Biden Turns 80, Making Him the First Octogenarian in the Oval Office - The New York Times",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiRWh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjIvMTEvMjAvdXMvcG9saXRpY3MvYmlkZW4tODAtZWxlY3Rpb24uaHRtbNIBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-11-20T22:33:49Z",
      content: null,
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Bruce Haring",
      title:
        "Ben Affleck And Matt Damon Launch Production Company With RedBird Capital’s Gerry Cardinale - Deadline",
      description:
        "As Deadline’s Mike Fleming reported back in June of this year, Redbird Capital Partners has today confirmed details in that story. Ben Affleck, Matt Damon and Gerry Cardinale are launching an artist-led studio that partners with filmmakers to empower creative…",
      url: "https://deadline.com/2022/11/ben-affleck-matt-damon-launch-production-company-with-redbird-capital-1235178013/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2022/04/Ben-Affleck-Matt-Damon-2.jpg?w=1000",
      publishedAt: "2022-11-20T22:05:00Z",
      content:
        "As Deadline’s Mike Fleming reported back in June of this year, Redbird Capital Partners has today confirmed details in that story. Ben Affleck, Matt Damon and Gerry Cardinale are launching an artist-… [+5107 chars]",
    },
    {
      source: { id: null, name: "The Detroit News" },
      author: "Adam Graham",
      title:
        "Jack White leaves Twitter after Musk reinstates Trump: 'Shame on you' - Detroit News",
      description:
        "The rocker pulled his record label, Third Man Records, from the social media platform after Elon Musk allowed the former president to return.",
      url: "https://www.detroitnews.com/story/entertainment/music/2022/11/20/jack-white-leaves-twitter-after-musk-reinstates-trump-shame-on-you/69665580007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/04/09/PDTN/119da086-3462-40db-8841-9cdaccb0560d-2022-0408-DGR-1297.jpg?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp",
      publishedAt: "2022-11-20T21:54:13Z",
      content:
        "Jack White deactivated his record label, Third Man Records, from Twitter on Sunday, following Elon Musk's reinstatement of Donald Trump's account on the social media platform.\r\n\"Shame on you for givi… [+2596 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Zach Wilson Postgame Press Conference (11/20) | New York Jets at New England Patriots | NFL - New York Jets",
      description:
        "QB Zach Wilson speaks with reporters following the Week 11 game against the Patriots.#NewYorkJets #Jets #NFL Subscribe to the New York Jets YT Channel: https...",
      url: "https://www.youtube.com/watch?v=d5br_mkk_gc",
      urlToImage: "https://i.ytimg.com/vi/d5br_mkk_gc/maxresdefault.jpg",
      publishedAt: "2022-11-20T21:32:09Z",
      content: null,
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Bethany Biron",
      title:
        "FTX founder Sam Bankman-Fried donated $40 million to political campaigns leading into the midterms, leaving some concerned about crypto's place in Washington, report says - Yahoo News",
      description:
        "Ryan Salame, a fellow FTX senior executive, donated more than $23 million primarily to Republican candidates, according to OpenSecrets data.",
      url: "https://www.businessinsider.com/ftx-sam-bankman-fried-donated-millions-democrats-report-2022-11",
      urlToImage:
        "https://media.zenfs.com/en/business_insider_articles_888/59ee4b13b5016b929148b982d4395b0c",
      publishedAt: "2022-11-20T21:04:58Z",
      content:
        "<ul><li>Sam Bankman-Fried and FTX execs donated a total of $70 million to political campaigns in 18 months, according to OpenSecrets.\r\n</li><li>Bankman-Fried himself donated $40 million to mostly lib… [+2182 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Qatar vs. Ecuador Highlights | 2022 FIFA World Cup - FOX Soccer",
      description:
        "Qatar and Ecuador kicked off the 2022 FIFA World Cup in style! Ecuador showed urgency and notched a penalty kick goal by Enner Valencia in the 16th minute. V...",
      url: "https://www.youtube.com/watch?v=KokKw1esPL8",
      urlToImage: "https://i.ytimg.com/vi/KokKw1esPL8/maxresdefault.jpg",
      publishedAt: "2022-11-20T19:47:02Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  //update article with url...
  async componentDidMount() {
    let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=30cc1541dc8c463c81e99c7edff471b0';
    let data=await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>TOP HEADLIENS OF US</h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description ? element.description :"Click below to know more..."}
                    url={element.urlToImage ? element.urlToImage : "https://th.bing.com/th/id/OIP.6kEev2FT9fMgGqWhNJSfPgHaE6?pid=ImgDet&rs=1"}
                    newUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
