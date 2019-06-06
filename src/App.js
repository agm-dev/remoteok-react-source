import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Job from './components/job/Job';

function App() {

  const tags = [
    'javascript',
    'typescript',
    'nodejs',
    'react',
    'angular',
    'vue',
  ];

  const jobs = [
    { title: 'job 1', tags: [ 'nodejs', 'javascript' ]},
    { title: 'job 2', tags: [ 'react', 'javascript' ]},
    { title: 'job 3', tags: [ 'vue', 'javascript' ]},
    { title: 'job 4', tags: [ 'react', 'javascript' ]},
    { title: 'job 5', tags: [ 'react', 'typescript', 'javascript' ]},
    { title: 'job 6', tags: [ 'angular', 'typescript', 'javascript' ]},
    { title: 'job 7', tags: [ 'php', 'laravel' ]},
  ];

  const [selectedJobs, setSelectedJobs] = useState(jobs);

  function selectedFiltersHandler(filters) {
    if (!filters.length) {
      setSelectedJobs(jobs);
      return;
    }

    const selectedJobs = jobs.filter(job => {
      const isInTags = filter => job.tags.includes(filter);
      return filters.every(isInTags);
    });
    setSelectedJobs(selectedJobs);
  }

  return (
    <div className="app">
      <Header jobs={ selectedJobs.length }/>
      <Search tags={ tags } selectedFiltersHandler={ selectedFiltersHandler }/>
      { selectedJobs.map((job, key) => <Job key={ key } title={ job.title } tags={ job.tags }/>) }
    </div>
  );
}

export default App;
