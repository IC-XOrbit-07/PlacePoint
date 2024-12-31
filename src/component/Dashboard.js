import React, { useState } from 'react';
import NavbarDashboard from './NavbarDashboard';
import Card from '../component/Card';
import SampleData from '../sampleData'; // Adjust the path to your JSON file

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((job) => {
    // Convert fields to lowercase and trim spaces
    const jobRole = job.role ? job.role.toLowerCase().trim() : '';
    const jobCompany = job.company ? job.company.toLowerCase().trim() : '';
    const jobDate = job.date ? job.date.toLowerCase().trim() : '';
    const jobLocation = job.location ? job.location.toLowerCase().trim() : '';
    const jobRate = job.rate ? job.rate.toLowerCase().trim() : '';
    const jobEmploymentType = job.employmentType ? job.employmentType.join(' ').toLowerCase().trim() : '';

    // Check if query matches any of these fields
    return (
      jobRole.includes(query.toLowerCase().trim()) ||
      jobCompany.includes(query.toLowerCase().trim()) ||
      jobDate.includes(query.toLowerCase().trim()) ||
      jobLocation.includes(query.toLowerCase().trim()) ||
      jobRate.includes(query.toLowerCase().trim()) ||
      jobEmploymentType.includes(query.toLowerCase().trim())
    );
  });
};

export default function Dashboard() {
  const [query, setQuery] = useState(""); // Initialize query as an empty string
  const tracks = SampleData?SampleData:[]; // Assuming SampleData has a tracks object
  console.log(tracks)
  const items = tracks; // Fallback to an empty array if tracks or items is undefined
  console.log(items)

  const filteredItems = getFilteredItems(query, items)?getFilteredItems(query,items):[];

  return (
    <div>
      <NavbarDashboard />
      <input
        className="form-control me-2"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          backgroundColor: "f2f2f5",
          marginTop: "60px",
          position: "absolute",
          width: "400px",
        }}
        type="search"
        placeholder="Search based on company name , salary , location"
        aria-label="Search"
      />
      <div className="mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((job, index) => (
              <div className="col" key={index}>
                <Card
                  date={job.date}
                  company={job.company}
                  role={job.role}
                  employmentType={job.employmentType}
                  rate={job.rate}
                  location={job.location}
                  logoUrl={job.logoUrl}
                  detailsUrl={"Apply Now"}
                />
              </div>
            ))
          ) : (
            <div>No jobs available.</div> // Optional message if no jobs are found
          )}
        </div>
      </div>
    </div>
  );
}
