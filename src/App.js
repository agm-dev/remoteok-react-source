import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Job from './components/job/Job';
import { useFetchJobs } from './hooks';

function App() {

  const [jobs, tags, loading, selectedJobs, setSelectedJobs] = useFetchJobs();

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

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Header jobs={ selectedJobs.length }/>
      <Search tags={ tags } selectedFiltersHandler={ selectedFiltersHandler }/>
      { selectedJobs.map((job, key) => <Job key={ key } title={ job.position } tags={ job.tags }/>) }
    </>
  );
}

export default App;
