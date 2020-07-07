import React from 'react'
import Switch from '@material-ui/core/Switch';
import Brightness5 from '@material-ui/icons/Brightness5';
import Brightness2 from '@material-ui/icons/Brightness2';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    const [state, setState] = React.useState({
        checked: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        let root = document.documentElement;
        if (state.checked) {
            root.style.setProperty('--font-color', "var(--lm-font-color)");
            root.style.setProperty('--font-color-secondary', "var(--lm-font-color)");
            root.style.setProperty('--font-color-tertiary', "var(--lm-font-color-tertiary)");
            root.style.setProperty('--font-color-inverted', "var(--lm-font-color-inverted)");
            root.style.setProperty('--background-color-main', "var(--lm-background-color-main)");
            root.style.setProperty('--background-color-secondary', "var(--lm-background-color-secondary)");
            root.style.setProperty('--background-color-tertiary', "var(--lm-background-color-tertiary)");
            root.style.setProperty('--background-color-header', "var(--lm-background-color-header)");
        } else {
            root.style.setProperty('--font-color', "var(--dm-font-color)");
            root.style.setProperty('--font-color-secondary', "var(--dm-font-color)");
            root.style.setProperty('--font-color-tertiary', "var(--dm-font-color-tertiary)");
            root.style.setProperty('--font-color-inverted', "var(--dm-font-color-inverted)");
            root.style.setProperty('--background-color-main', "var(--dm-background-color-main)");
            root.style.setProperty('--background-color-secondary', "var(--dm-background-color-secondary)");
            root.style.setProperty('--background-color-tertiary', "var(--dm-background-color-tertiary)");
            root.style.setProperty('--background-color-header', "var(--dm-background-color-header)");
        }
      };

    return (
        <header className="app-header">
            <div className="logo">
                <img src="https://streemly-marketing-assets.s3-us-west-2.amazonaws.com/logo.png" alt="streemly"></img>
            </div>
            <div className="header-links">
                <a className="active">Home</a>
                <a>New Report</a>
                <a>Recent Requests</a>
                <a>All Requests</a>
                <a>Workflows</a>
            </div>
            <div className="profile-picture">
                <div className="display-mode">
                    <Brightness5/>
                    <Switch
                        data-testid="color-mode-switch"
                        checked={state.checked}
                        onChange={handleChange}
                        name="checked"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        color="default"
                    />
                    <Brightness2/>
                </div>
                <Avatar alt="profile picture" src="https://i.pinimg.com/originals/a7/96/af/a796af59443ea335713867cddc2aca90.jpg" />
            </div>
        </header>
    )
  }
  
  export default Header