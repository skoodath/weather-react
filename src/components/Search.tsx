import React, { useContext, useRef } from "react";
import { InputGroup, Value } from "../styles/search.style";
import { WeatherContext } from "../context/weatherContext";

const Search = () => {
  const {
    CitySearch,
    SectionWrapper,
    SearchForm,
    SearchButton,
    SearchBox,
    SectionInner,
    ErrorMessage,
  } = InputGroup;

  const { Container, TextOne, TextTwo, TextThree } = Value;

  const { getWeather, loading, error } = useContext(WeatherContext);

  let inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event) => {
    getWeather(event, inputRef);
  };

  return (
    <>
      <SectionWrapper>
        <SectionInner $loading={loading}>
          <SearchForm onSubmit={handleSubmit}>
            <CitySearch>
              <SearchBox
                type="text"
                placeholder="search"
                error={error}
                ref={inputRef}
              />
              <button type="submit">
                <SearchButton />
              </button>
            </CitySearch>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </SearchForm>
          <Container>
            <TextOne>Search</TextOne>
            <TextTwo>weather</TextTwo>
            <TextOne>in</TextOne>
            <TextThree>your</TextThree>
            <TextTwo>city</TextTwo>
          </Container>
        </SectionInner>
      </SectionWrapper>
    </>
  );
};

export default Search;
