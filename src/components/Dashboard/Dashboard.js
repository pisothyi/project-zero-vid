import React, { useEffect, useState } from "react";
import TopBar from "../TopBar/TopBar";
import "./Dashboard.css";
import GoogleMapCovid19 from "../GoogleMapCovid19/GoogleMapCovid19";
import axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [covid19Data, setCovid19Data] = useState({ data: {} });
  const [searchCountry, setSearchCountry] = useState("cambodia");
  const [searchResult, setSearchResult] = useState({
    data: { countryInfo: {} },
  });
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://disease.sh/v3/covid-19/countries/cambodia?strict=true`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setCovid19Data({ data: request.data });
      //console.log(covid19Data);
      return request;
    }
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  const handleSearch = async () => {
    let input = searchCountry.toLowerCase();
    try {
      const request = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${input}?strict=true`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setSearchResult({ data: request.data });
      //console.log(searchResult);
    } catch (err) {
      window.alert("Please Enter a Valid Country");
    }
  };

  return (
    <div className="dashboard-container">
      <TopBar />

      <h1 className="title">Dashboard</h1>
      {isMobile ? (
        <div className="covid19-overview-container">
          <div className="covid19-stat-card-responsive">
            <div className="covid19-icon total-cases-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Total: </div>
              <div className="today-data-container">
                {covid19Data.data.cases}
              </div>
            </div>
          </div>
          <div className="covid19-stat-card-responsive">
            <div className="covid19-icon infected-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Infected: </div>
              <div className="today-data-container">
                {covid19Data.data.active}
              </div>
            </div>
          </div>
          <div className="covid19-stat-card-responsive">
            <div className="covid19-icon recovered-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Recovered: </div>
              <div className="today-data-container">
                {covid19Data.data.recovered}
              </div>
            </div>
          </div>
          <div className="covid19-stat-card-responsive">
            <div className="covid19-icon death-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Deaths: </div>
              <div className="today-data-container">
                {covid19Data.data.deaths}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="covid19-overview-container">
          <div className="covid19-stat-card">
            <div className="covid19-icon total-cases-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Total: </div>
              <div className="today-data-container">
                {covid19Data.data.cases}
              </div>
            </div>
          </div>
          <div className="covid19-stat-card">
            <div className="covid19-icon infected-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Infected: </div>
              <div className="today-data-container">
                {covid19Data.data.active}
              </div>
            </div>
          </div>
          <div className="covid19-stat-card">
            <div className="covid19-icon recovered-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Recovered: </div>
              <div className="today-data-container">
                {covid19Data.data.recovered}
              </div>
            </div>
          </div>
          <div className="covid19-stat-card">
            <div className="covid19-icon death-icon"></div>
            <div className="covid19-data-container">
              <div className="overall-data-container">Deaths: </div>
              <div className="today-data-container">
                {covid19Data.data.deaths}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="covid19-map-container">
        <div className="country-search-bar">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Country"
              aria-label="country"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setSearchCountry(e.target.value);
              }}
            />
            <InputGroup.Append>
              <Button
                variant="primary"
                className="d-flex align-items-center justify-content-center"
                onClick={handleSearch}
              >
                <Search />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <GoogleMapCovid19
          locationName={searchResult.data.country || "Cambodia"}
          position={{
            lat: searchResult.data.countryInfo.lat || 13,
            lng: searchResult.data.countryInfo.long || 105,
          }}
          data={{
            total: searchResult.data.cases || covid19Data.data.cases,
            active: searchResult.data.active || covid19Data.data.active,
            recovered:
              searchResult.data.recovered || covid19Data.data.recovered,
            death: searchResult.data.deaths || covid19Data.data.deaths,
          }}
          flag={
            searchResult.data.countryInfo.flag ||
            "https://disease.sh/assets/img/flags/kh.png"
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
