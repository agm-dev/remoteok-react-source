import { useState, useEffect } from 'react';

const JOBS_API_URL = 'https://brainl.es/remoteok/v1/remotejobs';

function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);

  async function fetchJobs () {
    const response = await fetch(JOBS_API_URL);
    const json = await response.json();
    const jobs = json.slice(1); // first result is legal text

    setJobs(jobs);
    setLoading(false);
    setTags([
      'javascript',
      'typescript',
      'nodejs',
      'react',
      'angular',
      'vue',
    ]);
    setSelectedJobs(jobs);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return [jobs, tags, loading, selectedJobs, setSelectedJobs];
}

export { useFetchJobs };
