import React from 'react'
import { day, date, month } from './Date/Date'
import { News } from './News/News'

import morenews from '../../images/dailynews/more-news.png'
import './dailynews.scss'

export const DailyNews = () => {
  return (
    <div className='daily-news-container'>
        <div className='daily-news'>
        <div>
            Noutăți importante
            </div>
            <div className='date-month'>
            <span className='fade-in-text'><div className='circle'></div></span> <span>{date}</span> <span className='month'>{month}</span> <span>, {day}</span>
            </div>
        </div>
        <News />
        <News />
        <News />
        <News />
        <span className='more-news'>
        Mai multe <img src={morenews}  width={14} height={14}  alt='More News' />
        </span>
    </div>
  )
}
