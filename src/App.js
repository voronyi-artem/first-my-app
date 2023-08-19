import React from 'react';
import './App.css';



function App() {
  return (
    <div className='app-wrapper'>
    <header className='header'>
      <img src="https://img.freepik.com/premium-vector/summer-beach-logo-template_441059-36.jpg?w=2000" alt="" />
    </header>
    <nav className='nav'>
      <div><a href="">Profile</a></div>
      <div><a href="">Messages</a></div>
      <div><a href="">News</a></div>
      <div><a href="">Music</a></div>
      <div><a href="">Settings</a></div>
    </nav>
    <div className='content'>
      <img src="https://images.france.fr/zeaejvyq9bhj/1rY6YFhCqPtvKWvr6xEK5M/52f144c7922412f39da2bbcf9640823b/ok-Plage-SantaGiulia2__Gevisions.jpg?w=1120&h=490&q=70&fl=progressive&fit=fill" alt="" className="top" />
    </div>
    </div>
  );
}

export default App;
