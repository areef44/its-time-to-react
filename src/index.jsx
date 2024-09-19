import React from 'react';
import { createRoot } from 'react-dom/client';
 
function Button({link}) {
  // TODO: selesaikan component-nya
  return<a href={link}>Find out more</a>
}
 
function CardHeader({ image, category }) {
  // TODO: selesaikan component-nya
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt=""/>
    </header>
  );
}
 
function CardBody({ date, title, content, link } ) {
  // TODO: selesaikan component-nya
  return(
  <div>
    <p>{date}</p>
    <h2>{title}</h2>
    <p>{content}</p>
    <Button link={link}/>
  </div>
  )
}
 
function Card({ image, category, date, title, content, link }) {
  // TODO: selesaikan component-nya
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  )
}
 
function Header({ title, subtitle }) {
  // TODO: selesaikan component-nya
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  )
}
 
function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://plus.unsplash.com/premium_photo-1661964088064-dd92eaaa7dcf?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://plus.unsplash.com/premium_photo-1661964088064-dd92eaaa7dcf?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://plus.unsplash.com/premium_photo-1661964088064-dd92eaaa7dcf?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Travel',
      link: '#'
    }
  ];
 
  // TODO: selesaikan component-nya
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      <Card 
        { ...someNews[0]}
      />
      <Card 
        {...someNews[1]}
      />
      <Card 
        {...someNews[2]}
      />
    </div>
  );
}
 
const root = createRoot(document.getElementById('root'));
root.render(<News />);