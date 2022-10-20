import React, { useContext, useRef } from "react";
import { Header } from "../styles/landing.style";
import { WeatherContext } from "../context/weatherContext";
import { FiSearch } from "react-icons/fi";

const TopSection = () => {
  const {
    CitySearch,
    SectionWrapper,
    SearchForm,
    SearchBox,
    SearchButton,
    SectionInner,
    ErrorMessage,
  } = Header;

  const { getWeather, error } = useContext(WeatherContext);

  let inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event) => {
    getWeather(event, inputRef);
  };

  return (
    <>
      <SectionWrapper>
        <SectionInner>
          <SearchForm onSubmit={handleSubmit}>
            <CitySearch>
              <SearchBox
                type="text"
                placeholder="Search city..."
                error={error}
                ref={inputRef}
              />
              <SearchButton aria-label="Search">
                <FiSearch />
              </SearchButton>
            </CitySearch>
          </SearchForm>
        </SectionInner>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </SectionWrapper>
    </>
  );
};

export default TopSection;
