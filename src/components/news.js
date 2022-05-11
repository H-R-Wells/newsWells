import React, { Component } from 'react'
import NewsItems from './newsItems'

export class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f77b5868ae274f0fb62a22fc69b344e0"
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles: parseData.articles})
        console.log(data);
    }

    
    render() {
        return (
            <div className='container flex flex-wrap justify-center min-w-full'>
                {/* <h1 className='font-semibold text-2xl'>News MDFK</h1> */}
                {this.state.articles.map((element) => {
                    return <div key={element.url} className='min-w-fit '>
                        <NewsItems title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
            </div>
        )
    }
}

export default News