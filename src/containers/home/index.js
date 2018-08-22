import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { contain } from '../../style/utils'
import { fetchRandom } from '../../modules/actions/random'
import {
  getIsFetching,
  getRestult,
} from '../../modules/reducers/random'

const Wrapper = styled.div`
  ${ contain('400px', '0', 'auto', '30px') }

  .label {
    margin-right: 20px;
  }

  .form-control {
    margin: 40px 0;
  }

  div {
    margin: 10px auto;
  }

  .submit {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 50px 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let form = document.getElementById('numberSubmission');
    let inputs = form && form.querySelectorAll('.phone');
    let list = [];

    Array.prototype.forEach.call(inputs, function(input) {
      // TODO validation
      let hasValue = input.value.trim() !== '';

      if (hasValue)  {
        list.push(input.value);
      }
    });

    event.preventDefault();
    this.props.fetchRandom(list);
  }

  renderLoader() {
    return (
      <p>Hang tight...</p>
    )
  }

  renderResult() {
    const { result } = this.props;

    return (
      <p>{ result.result }</p>
    )
  }

  render() {
    const { result, isFetching } = this.props;
    console.log('isFetching', isFetching);

    return (
      <Wrapper>
        <h1>Heads or Tails?</h1>
        <form onSubmit={this.handleSubmit} id="numberSubmission">
          <div className="form-control">
            <label htmlFor="phone1" className="label">Phone one:</label>
            <input type="text" className="phone" name="phone1" id="phone1" />
          </div>
          <div className="form-control">
            <label htmlFor="phone2" className="label">Phone two:</label>
            <input type="text" className="phone" name="phone2" id="phone2" />
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>



        <div>
          { isFetching && this.renderLoader() }
          { result && this.renderResult() }
        </div>
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  result: getRestult(state),
  isFetching: getIsFetching(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchRandom,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
