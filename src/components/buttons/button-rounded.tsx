import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './button-rounded.css';

type ComponentProps = {
  type: string;
  text: string;
  style: string;
  linkTo?: string;
  hashTo?: string;
  sendingErr?: boolean;
  sendingSuccess?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function ButtonRounded(props: ComponentProps) {
  return props.type === 'link' ? (
    <Link
      to={props.linkTo ? props.linkTo : ''}
      className={`button-rounded ${
        props.style === 'blue'
          ? 'button-rounded__blue text-color-white'
          : props.style === 'dark'
          ? 'button-rounded__dark text-color-peperment'
          : 'button-rounded__clear text-color-blue'
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {props.text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  ) : props.type === 'hash' ? (
    <HashLink
      to={props.hashTo ? props.hashTo : ''}
      className={`button-rounded ${
        props.style === 'blue'
          ? 'button-rounded__blue text-color-white'
          : props.style === 'dark'
          ? 'button-rounded__dark text-color-peperment'
          : 'button-rounded__clear text-color-blue'
      }`}
    >
      {props.text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </HashLink>
  ) : props.type === 'switch' ? (
    <button
      className={`button-rounded ${
        props.style === 'blue'
          ? 'button-rounded__blue text-color-white'
          : props.style === 'dark'
          ? 'button-rounded__dark text-color-peperment'
          : 'button-rounded__clear text-color-blue'
      }`}
      onClick={props.onClick}
    >
      {props.text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </button>
  ) : props.type === 'submit' ? (
    <button
      type="submit"
      className={`button-rounded button-rounded__submit ${
        props.style === 'blue'
          ? 'button-rounded__blue text-color-white'
          : props.style === 'dark'
          ? 'button-rounded__dark text-color-peperment'
          : 'button-rounded__clear text-color-blue'
      } ${props.sendingSuccess && 'button-rounded__success'} ${
        props.sendingErr && 'button-rounded__error'
      }`}
      onClick={props.onClick}
    >
      {props.text}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M24.2235 16.1849V14L27.9689 16.809L24.2235 19.618V17.4333H3V16.1849H24.2235Z"
          fill="currentColor"
        />
      </svg>
    </button>
  ) : props.type === 'download' ? (
    <a
      href={props.linkTo ? props.linkTo : ''}
      className={`button-rounded ${
        props.style === 'blue'
          ? 'button-rounded__blue text-color-white'
          : props.style === 'dark'
          ? 'button-rounded__dark text-color-peperment'
          : 'button-rounded__clear text-color-blue'
      }`}
      download="resume"
    >
      {props.text}
    </a>
  ) : (
    <button
      className={`button-rounded ${
        props.style === 'blue'
          ? 'button-rounded__blue text-color-white'
          : props.style === 'dark'
          ? 'button-rounded__dark text-color-peperment'
          : 'button-rounded__clear text-color-blue'
      }`}
    >
      {props.text}
    </button>
  );
}

export default ButtonRounded;
