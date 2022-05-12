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
        this.setState({ articles: parseData.articles })
        console.log(data);
    }


    render() {
        return (
            <div className='container flex flex-wrap justify-center min-w-full'>
                {/* <h1 className='font-semibold text-2xl'>News MDFK</h1> */}
                {this.state.articles.map((element) => {
                    return <div key={element.url} className='min-w-fit '>
                        <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}



                <div className='flex px-20 py-20 justify-between text-center container'>
                    <a rel='noreferrer' href="/" class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium  rounded-lg border  bg-blue-600 border-gray-700 hover:bg-blue-700 hover:text-white  text-white leading-tight uppercase shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        Previous
                    </a>
                    <a rel='noreferrer' href="/" class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium  rounded-lg border  bg-blue-600 border-gray-700 hover:bg-blue-700 hover:text-white  text-white leading-tight uppercase shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Next
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>

                </div>
            </div>
        )
    }
}

export default News