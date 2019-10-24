import React from 'react';
import {configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomImageContainer from './CustomImageContainer';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });
const src = 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg';
const alt = 'global Image';

describe('CustomImageContainer Component', () => {
    it('Snapshot test', () => {
        const tree = renderer
            .create(<CustomImageContainer src={src} alt={alt} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Check for "src" and "alt" prop to be present and to have a string value', () => {
        const el = shallow(<CustomImageContainer src={src} alt={alt}/>);

        expect(el.props().src).toEqual(src);
        expect(typeof el.props().src).toEqual('string');
    });

    it('Check for "placeholderImg" prop to be custom and to have a string value', () => {
        const placeholderImg = "http://getuikit.com/docs/images/placeholder_600x400.svg",
            el = mount(<CustomImageContainer src={src} alt={alt} placeholderImg={placeholderImg} />);

        expect(el.props().placeholderImg).toEqual(placeholderImg);
        expect(typeof el.props().placeholderImg).toEqual('string');
    });

    it('Check for "imgStyle" prop to have an object value', () => {
      const imgStyle = { backgroundColor: 'black' },
          el = mount(<CustomImageContainer src={src} alt={alt} imgStyle={imgStyle} />);

      expect(el.props().imgStyle).toEqual(imgStyle);
      expect(typeof el.props().imgStyle).toEqual('object');
    });

    it('Check for "placeholderStyle" prop to have an object value', () => {
        const placeholderStyle = { border: "2px solid red", backgroundColor: 'black' },
            el = mount(<CustomImageContainer src={src} alt={alt} placeholderStyle={placeholderStyle} />);

        expect(el.props().placeholderStyle).toEqual(placeholderStyle);
        expect(typeof el.props().placeholderStyle).toEqual('object');
    });

    it('Check for "animation" prop to have a string value', () => {
        const animation = 'bounceIn',
            el = mount(<CustomImageContainer src={src} alt={alt} animation={animation} />);

        expect(el.props().animation).toEqual(animation);
    });

    it('Check for "animationDuration" prop to have a string value', () => {
        const animationDuration = '1s',
            el = mount(<CustomImageContainer src={src} alt={alt} animationDuration={animationDuration} />);

        expect(el.props().animationDuration).toEqual(animationDuration);
        expect(typeof el.props().animationDuration).toEqual('string');
    });

    it('Check for "easing" prop to have a string value', () => {
        const easing = 'ease-in',
            el = mount(<CustomImageContainer src={src} alt={alt} easing={easing} />);

        expect(el.props().easing).toEqual(easing);
        expect(typeof el.props().easing).toEqual('string');
    });

    it('Check for rendered element to be an "img" with the expected src', () => {
        const el = mount(<CustomImageContainer src={src} alt={alt} />);

        expect(el.children().at(0).type()).toEqual('img');
        expect(el.find('img').prop('src')).toEqual(src);
    });
});