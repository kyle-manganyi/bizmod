import React, { Component } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import Dashboard from "../dashboard/dashboard";
import Profile from "../profile/profile";
import Vacancies from "../Vacancies/Vacancies";
import Messanger from "../Messenger/Messenger";
import Upload from '../components/Dashboard/Dashboard'
import Home from './Home/Home'
export default class MenuExampleVertical extends Component {
  state = { activeItem: "Home", user:JSON.parse(localStorage.getItem('user'))};
  

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    console.log(this.state.user)
    const { activeItem, user } = this.state;
    const welcome = window.location.href.split('/')
    return (
      <div>
        <Menu borderless style={{ margin: "0%" }}>
          <Menu.Item
            name="inbox"
            active={activeItem === "inbox"}
            onClick={this.handleItemClick}
            position="left"
          >
            Bizmod
          </Menu.Item>
          <Menu.Item
            name="inbox"
            active={activeItem === "inbox"}
            onClick={this.handleItemClick}
            position="right"
          >
            <Icon name="bell" size="large" />
          </Menu.Item>
          <Menu.Item
            name="updates"
            active={activeItem === "updates"}
            onClick={this.handleItemClick}
          >
            {user.name}
          </Menu.Item>
          <Menu.Item
            name="proile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          >
            <Icon name="angle down" />
            <Icon name="user" size="large" />
          </Menu.Item>
        </Menu>
        <div style={{ display: "flex" }}>
          <Menu
            vertical
            style={{
              margin: "0%",
              height: "120vh",
              backgroundColor: "#2185d0",
              width: '20%'
            }}
          >
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={this.handleItemClick}
              style={{
                color: "#fff",
                fontSize: activeItem === "Home" ? 20 : 16,
                fontWeight: "600"
              }}
            >
              <div>
                <Icon name="home" style={{marginRight:30}}/>
                Home
              </div>
            
            </Menu.Item>

            <Menu.Item
              name="Dashboard"
              active={activeItem === "Dashboard"}
              onClick={this.handleItemClick}
              style={{
                color: "#fff",
                fontSize: activeItem === "Dashboard" ? 20 : 16,
                fontWeight: "600"
              }}
            >
              <div>
                <Icon name="chart bar outline" style={{marginRight:30}}/>
                Dashboard
              </div>
              
            </Menu.Item>

            <Menu.Item
              name="Profile"
              active={activeItem === "Profile"}
              onClick={this.handleItemClick}
              style={{
                color: "#fff",
                fontSize: activeItem === "Profile" ? 20 : 16,
                fontWeight: "600",
              }}
            >
              <div>
                <Icon name="user circle outline" style={{marginRight:30}}/>
                Profile
              </div>
              
            </Menu.Item>
            <Menu.Item
              name="Upload"
              active={activeItem === "Upload"}
              onClick={this.handleItemClick}
              style={{
                color: "#fff",
                fontSize: activeItem === "Upload" ? 20 : 16,
                fontWeight: "600"
              }}
            >
              <div>
                <Icon name="upload" style={{marginRight:30}}/>
                Upload CV
              </div>
              
            </Menu.Item>
            <Menu.Item
              name="Vacancies"
              active={activeItem === "Vacancies"}
              onClick={this.handleItemClick}
              style={{
                color: "#fff",
                fontSize: activeItem === "Vacancies" ? 20 : 16,
                fontWeight: "600"
              }}
            >
              <div>
                <Icon name="briefcase" style={{marginRight:30}}/>
                Vacancies
              </div>
              
            </Menu.Item>
            <Menu.Item
              name="Messenger"
              active={activeItem === "Messenger"}
              onClick={this.handleItemClick}
              style={{
                color: "#fff",
                fontSize: activeItem === "Messenger" ? 20 : 16,
                fontWeight: "600"
              }}
            >
              <div>
                <Icon name="envelope" style={{marginRight:30}}/>
                Messenger
              </div>
              
            </Menu.Item>
          </Menu>
          <div style={{ marginLeft: 40, marginRight: 40 }}>
            {this.state.activeItem === "Dashboard" ? (
              <Dashboard></Dashboard>
            ) : this.state.activeItem === "Profile" ? (
              <Profile></Profile>
            ) : this.state.activeItem === "Vacancies" ?(
              <Vacancies></Vacancies>
            ) : this.state.activeItem === "Messenger" ?
            <Messanger></Messanger> : this.state.activeItem==='Upload'? <Upload></Upload>:
            
            welcome[welcome.length-1] === "admin"? <Home></Home>:null}
          </div>
        </div>
      </div>
    );
  }
}
