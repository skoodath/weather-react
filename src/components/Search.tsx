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
            <SearchButton />
            <CitySearch>
              <SearchBox
                type="text"
                placeholder="search"
                error={error}
                ref={inputRef}
              />
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
