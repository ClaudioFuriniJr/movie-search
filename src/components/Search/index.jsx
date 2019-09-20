import * as React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import searchIcon from '../../assets/images/search-icon.svg';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  form {
    position: relative;
  }
`;
const SearchInput = styled.input`
  border: 5px solid #14213D;
  border-radius: 50px;
  outline: none;
  width: 400px;
  height: 40px;
  padding: 0 20px;
  background: transparent;
  color: #FCA311;
  transition: border .5s ease;

  &.minChar {
    border: 5px solid #FCA311;
    transition: border .5s ease;
  }
`;
const SearchButton = styled.button`
  background: transparent;
  border: none;
  outline: 0;
  position: absolute;
  top: 15px;
  right: 20px;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 20px;
  }
`;

class Search extends React.Component {
  state = {
    value: '',
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value })
  };

  handleSubmit = (e, value) => {
    e.preventDefault();
    this.props.handleSearch(value)
  }

  render() {
    const { value } = this.state;
    const hasMinChar = value.length >= 3;
    return(
      <SearchBox>
        <form onSubmit={(e) => this.handleSubmit(e, value)}>
          <SearchInput className={cn({'minChar': hasMinChar})} type="text" value={value} onChange={this.handleChange} placeholder="type at least 3 letters" />
          <SearchButton type="submit"><img src={searchIcon} alt="search" /></SearchButton>
        </form>
      </SearchBox>
    )
  }
}

export default Search;