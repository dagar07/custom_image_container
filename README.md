This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# How to use the Image container component
  * First include the component as
    - import CustomImageContainer from 'pathRelativeToCurrentFolder/components/CustomImageContainer/  CustomImageContainer';
    - Required attributes for this is 
      * src and alt tag
      [
        let imgSrc = 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg';
        <CustomImageContainer
          src={imgSrc} // required tag
          alt="UK image" // required tag
          placeholderImg="" // it's string to provide placholder bg img
          color="red" // optional tag to provide bgColor to placeholder
          imgStyle={} // object type and optional to provide animation to img tag
          easing="ease-in-out" // optional
          animation="fadeInDown"
          animationDuration="1s"
          placeholderStyle={{color: 'red'}}
        />
      ]

    * for animation, import animation file
      - import './components/CustomImageContainer/animation.css';
      - in main app file to load css before component

