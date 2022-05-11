import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="m-8 ">
        <div className="rounded-lg shadow-lg bg-white max-w-xs ">
          <a href="#!">
            <img className="rounded-t-lg" src={imgUrl} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}...</h5>
            <p className="text-gray-700 text-base mb-4 ">
              {description}...
            </p>
            <a href={newsUrl} rel="noreferrer" target="_blank">
              <button type="button" className="flex px-6 py-2.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Read More<svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems